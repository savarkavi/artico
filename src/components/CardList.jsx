import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  return (
    <div className="flex-[70%]">
      <h2 className="text-4xl font-bold">Recent Posts</h2>

      {posts?.map((item) => {
        return (
          <div key={item._id}>
            <div className="flex justify-between gap-14 mt-10">
              <div className="relative h-[350px] flex-1">
                <Image
                  src={item.img}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex gap-4">
                  <span className="text-gray-400">
                    {item.createdAt.substring(0, 10)}
                  </span>
                  <span className="text-red-500 uppercase">
                    {item.catSlug.toUpperCase()}
                  </span>
                </div>
                <Link href={`/post/${item.slug}`} className="text-xl font-bold">
                  {item.title}
                </Link>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque ducimus voluptates, perspiciatis natus autem earum
                  praesentium dolor magnam accusantium ab enim rerum numquam,
                  eius doloribus? Animi quasi perspiciatis cum iure eligendi,
                  voluptate fugiat inventore quis!
                </p>
                <Link
                  href={`/post/${item.slug}`}
                  className="py-2 border-b border-red-500 w-[90px] text-center hover:text-red-500 transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <Pagination page={page} count={count} />
    </div>
  );
};

export default CardList;
