"use client";

import { useLanguage } from "@/context/LanguageContext";

const SignInContent = () => {
  const { messages } = useLanguage();
  
  return (
    <>
      <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
        {messages.signin.title}
      </h3>
      <p className="text-body-color mb-11 text-center text-base font-medium">
        {messages.signin.description}
      </p>
    </>
  );
};

export default SignInContent;