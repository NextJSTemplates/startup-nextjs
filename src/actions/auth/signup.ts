"use server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs"
import z from "zod"
import {SignupActionResponse, signupSchema} from "@/lib/shared/auth/signup"

export async function registerUser(_: SignupActionResponse | null, data: FormData): Promise<SignupActionResponse> {
  const raw = { email: data.get("email"), name: data.get("name"), password: data.get("password") };
  const valid  = await signupSchema.safeParseAsync(raw);

  if (!valid.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: valid.error.flatten().fieldErrors,
      inputs: raw as z.infer<typeof signupSchema>,
    };
  }
  const inputs = valid.data 
  const { email, name, password } = inputs;
  
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        message: "Email is already registered.",
        errors: { email: ["This email is already in use."] },
        inputs,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, name, hashedPassword } });

    //uncomment to test loading form state.
    //await new Promise(resolve => setTimeout(resolve, 3000));
    
    return { message: "User registered successfully.", success: true, inputs };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "An error occurred during registration.",  inputs,
    };
  }


}
