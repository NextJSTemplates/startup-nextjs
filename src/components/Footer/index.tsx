"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative z-10">
      <footer className="relative z-10 bg-gradient-to-br from-black via-black to-neutral-500 px-8 pt-16 text-white">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <span className="text-[160px] leading-none font-bold text-neutral-100/10 select-none">
            Classy Endeavors
          </span>
        </div>

        <div className="z-1 mx-auto flex max-w-7xl flex-col gap-10 pb-12">
          <div className="gris-cols-1 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                <p className="font-bold underline">hello@classyendeavors.com</p>
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
            <div className="text-[12px] md:text-[13px]">
              <h4 className="mb-4 font-semibold">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Portfolio</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div className="text-[12px] md:text-[13px]">
              <h4 className="mb-4 font-semibold">CORE SERVICES</h4>
              <ul className="space-y-2">
                <li>AI/ML Development</li>
                <li>AR/VR Development Services</li>
                <li>Mobile App Development</li>
                <li>Custom Software Development</li>
                <li>Cloud Consulting Services</li>
                <li>ChatGPT Integration Services</li>
                <li>DeepSeek Integration Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-500">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between p-6 text-xs text-white md:flex-row">
            <p>© 2008–2025 · Classy Endeavors · All Rights Reserved</p>
            <div className="flex gap-6 pt-2 md:pt-0">
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
