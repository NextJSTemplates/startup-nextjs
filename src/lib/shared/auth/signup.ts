import { z } from "zod";
import { ActionResponse } from ".\/";
// src/lib/validation.ts
export const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 8 characters long").max(50, "Name can't be longer than 50 chracters"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});


export type SignupFields = z.infer< typeof signupSchema>

export type SignupActionResponse =  ActionResponse<SignupFields>