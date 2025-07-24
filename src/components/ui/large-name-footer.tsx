"use client";
import Image from "next/image";
import Link from "next/link";
import { TextHoverEffect } from "./text-hover-effect";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br bg-foreground px-8 pt-4 text-white">
      <div className="container mx-auto max-w-8xl px-4 pt-12 pb-6 md:px-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={320}
                height={320}
                className="w-50 lg:w-60"
              />
            </Link>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Classy Endeavors. All rights
              reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="/services/cloud-computing" className="">
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-development" className="">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/artificial-intelligence" className="">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux" className="">
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link href="/services/software-security" className="">
                    Software Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/mvp-development" className="">
                    MVP Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/support-and-maintenance" className="">
                    Software Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Socials</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="https://github.com/classy-endeavors" className="">
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/classy-endeavors"
                    className=""
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/classy-endeavors">X</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="">
                    Terms of Service
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
