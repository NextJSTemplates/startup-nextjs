import { z } from "zod";
import { ActionResponse } from "./auth";
// src/lib/validation.ts
export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3, "Name is required").max(50, "Name can't be longer than 50 characters"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});


export type SignupFields = z.infer< typeof signupSchema>

export type SignupActionResponse =  ActionResponse<SignupFields>