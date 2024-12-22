import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid"
import { encode as defaultEncode } from "next-auth/jwt"

const adapter =  PrismaAdapter(prisma) 
const authOptions: AuthOptions = {
  adapter,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials

        const user = await prisma.user.findUnique( { where:{email}})
        const correctPassword =bcrypt.compareSync(password, user.hashedPassword)
 
        if ( correctPassword ) {
          return user
        }

        throw new Error("Invalid password");
 
      },

    }),
    
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true
      }
      
      return token
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid()

        if (!params.token.sub) {
          throw new Error("No user ID found in token")
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        })

        if (!createdSession) {
          throw new Error("Failed to create session")
        }

        return sessionToken
      }
      return defaultEncode(params)
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // A secret key for encryption
 
 
};

export default authOptions;

export const handler = NextAuth(authOptions)