"use client";
import Image from "next/image";
import Link from "next/link";
import { TextHoverEffect } from "./text-hover-effect";
import { useLanguage } from "@/components/Header";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br bg-foreground px-8 pt-4 text-white">
      <div className="container mx-auto max-w-8xl px-4 pt-12 pb-6 md:px-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/logo.png"
                alt={t("logoAlt")}
                width={320}
                height={320}
                className="w-50 lg:w-60"
              />
            </Link>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Classy Endeavors. {t("allRightsReserved")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold">{t("services")}</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="/services/cloud-computing" className="">
                    {t("cloudComputing")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="">
                    {t("mobileDevelopment")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-development" className="">
                    {t("softwareDevelopment")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/artificial-intelligence" className="">
                    {t("artificialIntelligence")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux" className="">
                    {t("uiUx")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-security" className="">
                    {t("softwareSecurity")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/mvp-development" className="">
                    {t("mvpDevelopment")}
                  </Link>
                </li>
                <li>
                  <Link href="/services/support-and-maintenance" className="">
                    {t("softwareMaintenance")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">{t("socials")}</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="https://github.com/classy-endeavors" className="">
                    {t("github")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/classy-endeavors"
                    className=""
                  >
                    {t("linkedin")}
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/classy-endeavors">{t("xTwitter")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">{t("legal")}</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="">
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="">
                    {t("termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full items-center justify-center">
          <TextHoverEffect text="CLASSY ENDEAVORS" />
        </div>
      </div>
    </footer>
  );
};