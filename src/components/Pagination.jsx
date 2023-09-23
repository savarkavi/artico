"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ page, count }) => {
  const router = useRouter();
  const POST_PER_PAGE = 5;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * page < count;

  return (
    <div className="flex justify-between mt-16">
      <button
        className="flex gap-2 bg-blue-500 px-3 py-2 w-[120px] justify-center rounded-lg items-center disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        <AiOutlineArrowLeft />
        Previous
      </button>
      <button
        className="flex gap-2 bg-blue-500 px-3 py-2 w-[120px] justify-center  rounded-lg items-center disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
