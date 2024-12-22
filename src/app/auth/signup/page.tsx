import Link from "next/link";

import { Metadata } from "next";
import { GithubButton, GoogleButton } from "@/components/Auth/providers";
import SignupForm from "@/components/Auth/Signup/form";

export const metadata: Metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign Up Page for Startup Nextjs Template",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Create your account
        </h3>
        <p className="mb-11 text-center text-base font-medium text-body-color">
          It’s totally free and super easy
        </p>
        <GoogleButton />

        <GithubButton />
        <div className="mb-8 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
          <p className="w-full px-5 text-center text-base font-medium text-body-color">
            Or, register with your email
          </p>
          <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
        </div>
        <SignupForm />
        <p className="text-center text-base font-medium text-body-color">
          Already using Startup?{" "}
          <Link href="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupPage;
