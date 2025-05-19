import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="relative z-10">
      <footer className="relative bg-gradient-to-br from-black via-black to-neutral-500 px-8 pt-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 pb-12">
          <div className="flex flex-col justify-between sm:flex-row">
            <h3 className="mb-6 text-xl font-bold md:text-2xl lg:text-4xl">
              Let&apos;s Grow Together
            </h3>
            <div>
              <Link
                href="#"
                className="text-dark flex w-fit gap-2 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold dark:text-white/70 dark:hover:text-white"
              >
                Contact Us
                <ExternalLink className="h-4 w-4 text-black" />
              </Link>
            </div>
          </div>
          <div className="gris-cols-1 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4 text-[13px] font-semibold">
              <p>10001, Park Run Drive Las Vegas, NV USA – 89145</p>
              <p className="text-white underline">+702/907-5006</p>
            </div>
            <div className="flex flex-col gap-4 text-[13px] font-semibold">
              <Image
                src="images/footer/india.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="max-w-xs">
                Plot No 228, JLPL Industrial Area Sector 82, Mohali India –
                140308
              </p>
              <p className="underline">+91-98554-85133</p>
            </div>
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
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-6 md:col-span-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={10}
                  height={10}
                  className="h-16 w-16"
                />
                <p className="text-md font-bold text-white md:text-xl lg:text-2xl">
                  Classy Endeavours
                </p>
              </div>
              <p className="max-w-xl text-[13px]">
                Classy Endeavours is an IT company leading in SaaS innovation.
                We create cutting-edge, scalable software solutions that
                transform business operations, fueling success in the digital
                era.
              </p>
              <Link
                href="#"
                className="text-dark flex w-fit gap-2 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold"
              >
                Work with us
                <ExternalLink className="h-4 w-4 text-black" />
              </Link>
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
