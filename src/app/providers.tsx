"use client";

import { LanguageProvider } from "@/components/Header";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
