"use client";

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Menu as MenuIcon, X } from "lucide-react"; // icons

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-3 inset-x-0 max-w-3xl md:mx-auto mx-2 z-50 rounded-full border border-black/[0.1] dark:border-white/[0.2] flex items-center justify-between px-4 dark:bg-black bg-white",
        className
      )}
    >
      <Link
        href="/"
        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-semibold"
      >
        <Image
          src="/images/logo/logo-dark.svg"
          alt="logo"
          width={30}
          height={30}
          className="h-9 w-9"
        />
        <span className="hidden md:inline">Classy endeavors</span>
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        <Menu setActive={setActive}>
          <HoveredLink href="/about-us">About Us</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              {/* <ProductItem
                title="Cloud Computing"
                href="/services/cloud-computing"
                description="Scalable cloud solutions for modern businesses."
              />
              <ProductItem
                title="Mobile Development"
                href="/services/mobile-development"
                description="Build high-performance apps for iOS and Android."
              />
              <ProductItem
                title="Software Development"
                href="/services/software-development"
                description="Custom software tailored to your business needs."
              /> */}
              <ProductItem
                title="Artificial Intelligence"
                href="/services/artificial-intelligence"
                description="AI-powered solutions to automate and optimize workflows."
              />
              <ProductItem
                title="UI/UX"
                href="/services/ui-ux"
                description="Intuitive design that elevates user experience."
              />
              {/* <ProductItem
                title="Software Security"
                href="/services/software-security"
                description="Protect applications with enterprise-grade security."
              />
              <ProductItem
                title="MVP Development"
                href="/services/mvp-development"
                description="Rapid prototyping to validate your product ideas fast."
              />
              <ProductItem
                title="Software Maintenance"
                href="/services/software-maintenance"
                description="Ongoing updates and support for long-term success."
              /> */}
            </div>
          </MenuItem>
          <HoveredLink href="https://blog.classyendeavors.com/">Blogs</HoveredLink>
        </Menu>
        <CustomButton title="Contact Us" link="mailto:info@classyendeavors.com" />
      </div>

      <button
        className="md:hidden relative z-20 p-2 rounded-lg focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {mobileOpen && (
        <div className="absolute top-14 left-0 w-full max-h-fit bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-md md:hidden rounded-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            <HoveredLink href="/about-us">About Us</HoveredLink>

            <div className="w-full">
              <button
                className="flex justify-between items-center w-full text-left py-2"
                onClick={() => setActive(active === "Products" ? null : "Products")}
              >
                <span>Products</span>
                <span>{active === "Products" ? "−" : "+"}</span>
              </button>

              {active === "Products" && (
                <div className="flex flex-col space-y-3 p-4 mt-2 border rounded-lg">
                  {/* <ProductItem
                    title="Cloud Computing"
                    href="/services/cloud-computing"
                    description="Scalable cloud solutions for modern businesses."
                  />
                  <ProductItem
                    title="Mobile Development"
                    href="/services/mobile-development"
                    description="Build high-performance apps for iOS and Android."
                  />
                  <ProductItem
                    title="Software Development"
                    href="/services/software-development"
                    description="Custom software tailored to your business needs."
                  /> */}
                  <ProductItem
                    title="Artificial Intelligence"
                    href="/services/artificial-intelligence"
                    description="AI-powered solutions to automate and optimize workflows."
                  />
                  <ProductItem
                    title="UI/UX"
                    href="/services/ui-ux"
                    description="Intuitive design that elevates user experience."
                  />
                  {/* <ProductItem
                    title="Software Security"
                    href="/services/software-security"
                    description="Protect applications with enterprise-grade security."
                  />
                  <ProductItem
                    title="MVP Development"
                    href="/services/mvp-development"
                    description="Rapid prototyping to validate your product ideas fast."
                  />
                  <ProductItem
                    title="Software Maintenance"
                    href="/services/software-maintenance"
                    description="Ongoing updates and support for long-term success."
                  /> */}
                </div>
              )}
            </div>

            <HoveredLink href="https://blog.classyendeavors.com/">Blogs</HoveredLink>
            <CustomButton title="Contact Us" link="mailto:info@classyendeavors.com" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
