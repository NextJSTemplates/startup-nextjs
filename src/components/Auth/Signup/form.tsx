"use client";
import { registerUser } from "@/actions/auth/signup";
import React, {  useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/Ui/loading-spinner";
import {useFormState} from "react-dom"
function SignupForm() {
  const searchParams = useSearchParams()
useFormState
  const [signup_state, signup, pending] = useFormState(registerUser, {
    message: "",
    success: false,
    inputs: {
      name: searchParams.get("name"),
      email: searchParams.get("email"),
      password: searchParams.get("password")
    }
  });

  const router = useRouter();
  useEffect(() => {
    console.log("Signup", signup_state);
    if (signup_state && !signup_state?.success) {
      if (
        signup_state?.errors?.email?.includes("This email is already in use.")
      ) {
        //I suggest to implement  a better modal, or toast.
        alert(
          "This email seems to have already been used. Try signing in instead",
        );
      }
    } else {
      router.push("/");
    }
  }, [router, signup_state]);

  return (
    <form action={signup}>
      {/* <Field
        state={signup_state}
        labelContent="Full Name"
        minLength={3}
        maxLength={50}
        type="text"
        name="name"
        required
        placeholder="Enter your full name"
      />
       
      <Field
        state={signup_state}
        labelContent="A strong Password to autenticate in our webiste"
        type="password"
        name="password"
        required
        minLength={8}
        placeholder="Enter your Password"
      /> */}
      <div className="mb-8 flex">
        <label
          htmlFor="checkboxLabel"
          className="flex cursor-pointer select-none text-sm font-medium text-body-color"
        >
          <div className="relative">
            <input type="checkbox" id="checkboxLabel" className="sr-only" />
            <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
              <span className="opacity-0">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    fill="#3056D3"
                    stroke="#3056D3"
                    strokeWidth="0.4"
                  />
                </svg>
              </span>
            </div>
          </div>
          <span>
            By creating account means you agree to the
            <a href="#0" className="text-primary hover:underline">
              {" "}
              Terms and Conditions{" "}
            </a>
            , and our
            <a href="#0" className="text-primary hover:underline">
              {" "}
              Privacy Policy{" "}
            </a>
          </span>
        </label>
      </div>
      <div className="mb-6">
        <button
          disabled={pending}
          className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:bg-primary/50 dark:shadow-submit-dark"
        >
          Sign up {pending && <LoadingSpinner />}
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
