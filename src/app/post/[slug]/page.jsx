import Sidebar from "@/components/Sidebar";
import Comments from "@/components/comments";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}?cat=${""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  console.log(data);

  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-16">
          <h2 className="text-6xl font-bold max-w-[700px]">{data?.title}</h2>
          <div className="flex gap-2 items-center">
            {data?.user?.image && (
              <div className="relative w-14 h-14 rounded-full">
                <Image
                  src={data?.user?.image}
                  alt="pp"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 text-gray-400">
              <span>{data?.user?.name}</span>
              <span>{data?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="relative w-[600px] h-[400px]">
            <Image src={data?.img} alt="pp" fill className="object-cover" />
          </div>
        )}
      </div>

      <div className="flex gap-[150px] mt-20">
        <div className="flex-[70%]">
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <Comments postSlug={slug} commentsLength={data?.comments.length} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default SinglePage;
