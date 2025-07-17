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
import { Button } from "../ui/button";

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
          <Button className="border border-border/50 bg-foreground px-4 text-[13px] font-semibold text-background rounded-full">
            Contact Us
            <ExternalLink className="ml-1.5 h-4 w-4 text-primary" />
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
              className="relative text-background"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Button
              className="border border-border/50 bg-foreground px-4 text-[12px] font-semibold text-background"
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
