"use client"

import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import CustomButton from '../CustomButton';

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-3 inset-x-0 max-w-3xl mx-auto z-50 rounded-full border border-black/[0.1] dark:border-white/[0.2] flex items-center justify-between px-4 dark:bg-black bg-white", className)}
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
      <Menu setActive={setActive}>
        <HoveredLink href="/about-us">About Us</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            <ProductItem
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
            />
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
            <ProductItem
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
            />
          </div>
        </MenuItem>

        <HoveredLink href="https://blog.classyendeavors.com/">Blogs</HoveredLink>
      </Menu>
      <CustomButton title="Contact Us" />
    </div>
  );
}

export default Navbar