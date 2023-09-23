import React from "react";
import { playfair } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="py-10 mt-10">
      <p className={`text-8xl max-w-[1080px] ${playfair.className}`}>
        Welcome to Artico! A home to the great stories and articles on the web.
      </p>
      <div className="flex mt-28 gap-14 items-center justify-between">
        <div className="relative w-full h-[500px] flex-1">
          <Image
            src="/p1.jpeg"
            alt="featured image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 justify-center flex-1">
          <h2 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            repellendus!
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
            unde deleniti hic odio laboriosam alias obcaecati magni ipsa
            blanditiis accusantium omnis repellendus voluptate, maxime eum,
            ducimus fuga expedita sunt nisi natus harum vel similique iure
            maiores repudiandae! Ea a perspiciatis consectetur qui aut
            voluptatum pariatur?
          </p>
          <Link
            href="/"
            className="bg-white px-3 py-2 rounded-lg text-black w-28 text-center"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
