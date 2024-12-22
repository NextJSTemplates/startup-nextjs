"use server"
import {SigninActionResponse, signinSchema} from "@/lib/shared/auth/signin"
import { signIn } from "@/app/api/auth/[...nextauth]/auth-options"

export const logUser  = async (_: SigninActionResponse | null, data: FormData): Promise<SigninActionResponse> =>{
  signIn( "credentials", {})
  return { message: "User logged successfully.", success: true };

}