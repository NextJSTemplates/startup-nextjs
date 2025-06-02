"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative z-10">
      <footer className="via-blac/90 md: relative z-10 bg-gradient-to-br from-black via-black to-neutral-500 px-8 pt-20 text-white lg:pb-42">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden text-center">
          <span className="translate-y-48 text-[120px] leading-none font-bold text-neutral-100/10 select-none md:text-[130px] lg:text-[160px]">
            Classy Endeavors
          </span>
        </div>

        <div className="z-1 mx-auto flex max-w-7xl flex-col gap-10 pb-16">
          <div className="gris-cols-1 grid gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={10}
                    height={10}
                    className="h-14 w-14"
                  />
                  <p className="text-md font-bold text-white md:text-xl lg:text-4xl">
                    Classy Endeavours
                  </p>
                </div>
              </div>
              <div className="flex max-w-md flex-col justify-between gap-2 md:flex-row">
                <div className="flex gap-2">
                  <div>
                    <Image
                      src="images/footer/mail.svg"
                      alt="Mail Logo"
                      width={10}
                      height={10}
                      className="h-12 w-12"
                    />
                  </div>
                  <div className="flex flex-col gap-4 text-[13px] font-semibold">
                    <p className="">Mail us at</p>
                    <p className="font-bold underline">
                      hello@classyendeavors.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[13px] font-bold">Follow us on</p>
                  <div className="flex gap-2">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[12px] md:text-[13px]">
              <h4 className="mb-4 font-semibold">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Portfolios</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="text-[12px] md:text-[13px]">
              <h4 className="mb-4 font-semibold">CORE SERVICES</h4>
              <ul className="space-y-2">
                <li>UI/UX Design</li>
                <li>Software MVP</li>
                <li>Software Security</li>
                <li>Integrating AI Models</li>
                <li>Inter Modal SAAS Solutions</li>
                <li>Scalable E-Commerce</li>
                <li>Cloud Computing</li>
                <li>HIPAA Compliant Software</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
