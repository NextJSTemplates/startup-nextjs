"use client";
//client callback since next auth suppoorts only client side autentication.
import { signIn } from "next-auth/react";
import { SigninActionResponse, signinSchema } from "@/lib/shared/auth/signin";
import { z } from "zod";

export const logUser = async (
  _: SigninActionResponse | null,
  data: FormData
): Promise<SigninActionResponse> => {
  // Estrarre i dati grezzi dal FormData
  const raw = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Validazione dei dati
  const validated = await signinSchema.safeParseAsync(raw);

  if (!validated.success) {
    return {
      message: "Validation failed.",
      success: false,
      inputs: raw as z.infer<typeof signinSchema>,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const inputs = validated.data;
  const { email, password } = inputs
  // Effettuare il login con next-auth
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false, // Per evitare reindirizzamenti automatici
  });

  if (result?.error) {
    return {
      message: result.error,
      inputs,
      success: false,
     
    };
  }

  return {
    message: "Login successful.",
    success: true,
    inputs,
   };
};
