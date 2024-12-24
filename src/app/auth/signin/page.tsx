import Link from "next/link";

import { Metadata } from "next";
import { GithubButton, GoogleButton } from "@/components/Auth/providers";
import SigninForm from "@/components/Auth/Signin/form";
import { SignupFields } from "@/lib/shared/auth/signup";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};

const SigninPage = async ({searchParams }: {searchParams : SignupFields}) => {
  return (
    <>
      <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
        <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Sign in to your account
        </h3>
        <p className="mb-11 text-center text-base font-medium text-body-color">
          Login to your account for a faster checkout.
        </p>
        <GoogleButton />

        <GithubButton />
        <div className="mb-8 flex items-center justify-center">
          <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
          <p className="w-full px-5 text-center text-base font-medium text-body-color">
            Or, sign in with your email
          </p>
          <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
        </div>
        <SigninForm {...searchParams} />
        <p className="text-center text-base font-medium text-body-color">
          Don’t you have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default SigninPage;
