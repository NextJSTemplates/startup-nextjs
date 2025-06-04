"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "../ui/moving-border";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";

const Header = () => {
  const navItems = [
    { name: "About", link: "#about" },
    {
      name: "Services",
      link: "#services",
      children: [
        { name: "Cloud Computing", link: "/services/cloud-computing" },
        { name: "Mobile Apps", link: "/services/mobile-development" },
        { name: "Software Development", link: "/services/software-development" },
        { name: "Artificial Intelligence", link: "/services/ai" },
      ],
    },
    { name: "Industries", link: "#industries" },
    { name: "Portfolios", link: "#portfolios" },

    { name: "Blogs", link: "#blogs" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4 ">
          <Button className="max-w-sm border-neutral-300 bg-white px-4 text-[13px] font-semibold text-black dark:border-slate-800 dark:bg-black dark:text-white">
            Contact Us
            <ExternalLink className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Button
              borderRadius="1.75rem"
              className="border-neutral-300 bg-white px-4 text-[12px] font-bold text-black dark:border-slate-800 dark:bg-black dark:text-white"
            >
              Contact Us
            </Button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
