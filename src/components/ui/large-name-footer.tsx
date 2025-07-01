"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto max-w-7xl border-t px-4 py-12 md:px-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={10}
                height={10}
                className="h-14 w-14"
              />
              <h2 className="text-lg font-bold">Classy Endeavors</h2>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              © {new Date().getFullYear()} Lexnova AI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold">Pages</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-muted-foreground">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="text-muted-foreground">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.arihant.us/"
                    className="text-muted-foreground"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Socials</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link
                    href="https://github.com/arihantcodes/spectrum-ui"
                    className="text-muted-foreground"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/arihantcodes"
                    className="text-muted-foreground"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/arihantcodes"
                    className="text-muted-foreground"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="text-muted-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <h1 className="from-muted to-muted/5 bg-gradient-to-b bg-clip-text text-center text-3xl font-bold text-transparent select-none md:text-5xl lg:text-[10rem]">
            Lexnova AI Ltd
          </h1>
        </div>
      </div>
    </footer>
  );
};
