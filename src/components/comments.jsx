"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const Comments = ({ postSlug, commentsLength }) => {
  const [desc, setDesc] = useState("");

  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });

    mutate();
  };

  return (
    <div>
      <div className="mt-28 flex flex-col gap-8">
        <h4 className="text-3xl">Comments</h4>
        <div className="flex gap-6">
          <textarea
            placeholder="write a comment"
            className="px-4 py-2 w-full outline-none text-black"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="bg-blue-500 px-3 text-white w-24"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
      {status === "unauthenticated" && (
        <div className="mt-20 text-xl">
          <Link href="/" className="text-blue-500">
            Sign In
          </Link>{" "}
          <span>to post a comment</span>
        </div>
      )}

      {commentsLength === 0 ? (
        ""
      ) : isLoading ? (
        <div className="mt-12">Loading...</div>
      ) : (
        data?.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-20 flex flex-col gap-20 border-b py-4"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <div className="relative w-10 h-10 rounded-full">
                    <Image
                      src={item?.user?.image}
                      alt="pp"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-gray-400">
                    <span className="text-sm">{item?.user?.name}</span>
                    <span className="text-sm">
                      {item?.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className="text-sm">{item?.desc}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
