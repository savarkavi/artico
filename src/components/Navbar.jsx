"use client";

import React from "react";
import { ubuntu } from "@/utils/fonts";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  return (
    <div className="py-10 flex justify-between items-center border-b border-white">
      <div className="flex gap-4 text-2xl">
        <AiFillInstagram className="cursor-pointer hover:text-gray-400 transition-all" />
        <AiFillTwitterCircle className="cursor-pointer hover:text-gray-400 transition-all" />
        <AiFillYoutube className="cursor-pointer hover:text-gray-400 transition-all" />
      </div>
      <Link
        href="/"
        className={`text-5xl  translate-x-1/2 tracking-wider uppercase ${ubuntu.className}`}
      >
        Artico
      </Link>
      <div className="flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        {status === "authenticated" && <Link href="/publish">Write</Link>}
        {status === "authenticated" ? (
          <Link href="/" onClick={signOut}>
            Logout
          </Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
