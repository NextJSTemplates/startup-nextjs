"use client"
import { BuiltInProviderType } from 'next-auth/providers';
import { LiteralUnion, signIn } from 'next-auth/react';
import React, { ReactNode } from 'react'

const ProviderButton = ({
  children,
  provider,
}: {
  children: ReactNode;
  provider: LiteralUnion<BuiltInProviderType>;
}) => {
  return (
    <button
      onClick={() => signIn(provider)}
      aria-label={`Sign in with ${provider}`}

      className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
    >
      {children}
    </button>
  );
};


export default ProviderButton