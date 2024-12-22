import { z } from "zod";
import { ActionResponse } from ".\/";
// src/lib/validation.ts
export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});


export type SigninFields = z.infer< typeof signinSchema>

export type SigninActionResponse =  ActionResponse<SigninFields>