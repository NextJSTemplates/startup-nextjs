"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import fr from "@/messages/fr.json";
import en from "@/messages/en.json";
import de from "@/messages/de.json";

type Locale = "fr" | "en" | "de";
type Messages = typeof fr;

interface LanguageContextProps {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("fr");

  const messages: Record<Locale, Messages> = { fr, en, de };

  return (
    <LanguageContext.Provider value={{ locale, messages: messages[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
