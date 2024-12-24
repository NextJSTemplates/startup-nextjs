// app/components/UserButton.tsx
"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/Ui/popover";
import {  signOut } from "next-auth/react";
import Image from "next/image"; // Using Next.js optimized image


export default function UserButton(user:  {
  name?: string;
  email?: string;
  image?: string;
} ) {
  const split = user.name.split(" ")
  const firstLetter = split[0][0]
  const secondLetter = split[1]? split[1][0]: split[0][1]
  
  const content = (firstLetter + secondLetter).toUpperCase()
   return (
    <Popover>
      {/* User Button - Displaying Avatar Image */}
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center w-12 h-12 dark:bg-dark  dark:text-gray-light font-semibold text-xl rounded-full">
          
          {/* Replace with next/image for optimized image rendering */}
          {user.image ?(
          <Image
            src={user.image  }  // Fallback to default avatar if no user image is available
            alt="User Avatar"
            width={40}   // You can adjust the width and height to your desired size
            height={40}
            className="rounded-full"
          />):(
            <div className=" rounded-full aspect-square
            " aria-label={ content } >
              {content}
            </div>
          )}
        </button>
      </PopoverTrigger>

      {/* Popover Content with Log Out button */}
      <PopoverContent align="center" className=" w-fit px-6 p-2  mt-6 bg-white !bg-opacity-80 dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky backdrop-blur-sm rounded-lg">
        <button
          onClick={() => signOut()}
          className=" block text-center mx-auto  p-2 text-sm rounded-md   dark:text-white/70 text-gray-dark/70 dark:hover:text-white hover:text-gray-dark"
        >
          Log Out
        </button>
      </PopoverContent>
    </Popover>
  );
}
