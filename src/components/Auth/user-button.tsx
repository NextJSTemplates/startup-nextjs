// app/components/UserButton.tsx
"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image"; // Using Next.js optimized image
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Import the Popover components

export default function UserButton() {
  const { data: session } = useSession();

  return (
    <Popover>
      {/* User Button - Displaying Avatar Image */}
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
          {/* Replace with next/image for optimized image rendering */}
          <Image
            src={session.user.image || "/default-avatar.png"}  // Fallback to default avatar if no user image is available
            alt="User Avatar"
            width={40}   // You can adjust the width and height to your desired size
            height={40}
            className="rounded-full"
          />
        </button>
      </PopoverTrigger>

      {/* Popover Content with Log Out button */}
      <PopoverContent align="center" className=" w-fit px-6 p-2  mt-2 bg-white !bg-opacity-80 dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky backdrop-blur-sm rounded-lg">
        <button
          onClick={() => signOut()}
          className=" block text-center mx-auto  p-2 text-sm rounded-md text-white/70 hover:text-white"
        >
          Log Out
        </button>
      </PopoverContent>
    </Popover>
  );
}
