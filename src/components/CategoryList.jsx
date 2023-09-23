import React from "react";
import { catLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  const renderedCatLinks = data?.map((link) => {
    return (
      <Link
        href={`/articles?cat=${link.slug}`}
        key={link._id}
        className={`flex gap-5 items-center bg-blue-500 px-10 py-4 rounded-lg w-[200px]`}
      >
        {link.img && (
          <div className=" w-8 h-8 relative">
            <Image
              src={link.img}
              alt="images"
              fill
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>
        )}
        <span className="flex-1">{link.title}</span>
      </Link>
    );
  });

  return (
    <div className="py-10 mt-10">
      <h2 className="text-4xl font-bold">Popular Categories</h2>
      <div className="flex justify-between mt-14">{renderedCatLinks}</div>
    </div>
  );
};

export default CategoryList;
