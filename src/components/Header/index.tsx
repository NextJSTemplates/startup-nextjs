"use client";

import { ExternalLink } from "lucide-react";
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
import { Button } from "../ui/moving-border";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { name: "About Us", link: "/about-us" },
    {
      name: "Services",
      link: "#services",
      sublinks: [
        { name: "Cloud Computing", link: "/services/cloud-computing" },
        {
          name: "Software Development",
          link: "/services/software-development",
        },
        {
          name: "Artificial Intelligence",
          link: "/services/artificial-intelligence",
        },
        { name: "UI/UX", link: "/services/ui-ux" },
        { name: "Software Security", link: "/services/software-security" },
        {
          name: "MVP Development",
          link: "/services/mvp-development",
        },
        {
          name: "Software Maintainance",
          link: "/services/support-and-maintenance",
        },
      ],
    },
    { name: "Industries", link: "/industries" },
    { name: "Portfolios", link: "/portfolios" },

    { name: "Blogs", link: "/blogs" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Button
            asChild
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
          >
            <Link href="#contact">Contact Us</Link>
            <ExternalLink className="text-primary w-4 h-4 ml-2" />
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
              className="relative text-foreground"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
          <Button
            asChild
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 z-30 md:text-base text-xs font-semibold rounded-full md:px-4 md:py-2 w-full"
          >
            <Link href="#contact">Contact Us</Link>
            <ExternalLink className="text-primary w-4 h-4 ml-2" />
          </Button> 
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
