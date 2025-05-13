import { ExternalLink, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <section className="relative z-10 bg-white dark:bg-black">
      <footer className="bg-gradient-to-br from-black to-neutral-500 px-8 pt-16 pb-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex justify-between">
            <h3 className="mb-6 text-4xl font-bold">Let's Grow Together</h3>
            <div>
              <Link
                href="#"
                className="text-dark flex w-fit gap-2 rounded-full bg-white py-4.5 text-sm font-semibold lg:px-6 dark:text-white/70 dark:hover:text-white"
              >
                Contact Us
                <ExternalLink className="h-4 w-4 text-black" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <p>10001, Park Run Drive Las Vegas, NV USA – 89145</p>
              <p className="text-white underline">+702/907-5006</p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <p className="font-bold tracking-wide text-4xl">INDIA</p>
              <p className="max-w-xs">
                Plot No 228, JLPL Industrial Area Sector 82, Mohali India –
                140308
              </p>
              <p className="underline">+91-98554-85133</p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <p className="">Mail us at</p>
              <p className="font-bold underline">hello@classyendeavors.com</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md text-sm font-bold">Follow us on</p>
              <div className="flex gap-2">
                <Facebook />
                <Instagram />
                <Twitter />
                <Linkedin />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={10}
                height={10}
                className="w-12 h-12"
              /> 
              <p className="text-2xl font-bold text-white">Classy Endeavours</p>
              </div>
              <p className="max-w-md text-sm">
                Classy Endeavours is an IT company leading in SaaS innovation.
                We create cutting-edge, scalable software solutions that
                transform business operations, fueling success in the digital
                era.
              </p>
              <Link
                href="#"
                className="text-dark flex w-fit gap-2 rounded-full bg-white py-4.5 text-sm font-semibold lg:px-6 dark:text-white/70 dark:hover:text-white"
              >
                Work with us
                <ExternalLink className="h-4 w-4 text-black" />
              </Link>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Portfolio</li>
                <li>Solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">CORE SERVICES</h4>
              <ul className="space-y-2 text-sm">
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

        <div className="mt-10 flex items-center justify-between border-t border-gray-700 pt-4 text-xs text-gray-400">
          <p>© 2008–2025 · Classy Endeavors · All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
