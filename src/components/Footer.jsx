import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { ubuntu } from "@/utils/fonts";

const Footer = () => {
  return (
    <div className="flex justify-between mt-10 py-16 border-t border-white">
      <div className="flex flex-col gap-4">
        <h1 className={`text-4xl font-bold ${ubuntu.className}`}>Artico</h1>
        <p className="text-gray-400 max-w-[800px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          assumenda pariatur autem vero magni itaque totam deserunt nesciunt?
          Animi error, rem ab mollitia non, ut voluptas quidem nihil aliquam
          quos quaerat dicta sunt nam totam. Exercitationem vitae, sequi magni
          voluptas odit quasi officiis quidem soluta?
        </p>
        <div className="flex gap-4 text-xl">
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-2 text-gray-400">
          <span className="text-white font-bold">Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-400">
          <span className="text-white font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-400">
          <span className="text-white font-bold">Socials</span>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
