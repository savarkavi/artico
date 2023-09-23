"use client";

import CardList from "@/components/CardList";
import Sidebar from "@/components/Sidebar";
import React from "react";

const CategoryPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  const { cat } = searchParams;

  return (
    <div className="mt-10">
      <h1 className="text-3xl bg-red-500 px-3 py-3 w-[300px] text-center rounded-xl capitalize">
        {`${cat} Articles`}
      </h1>
      <div className="flex py-10 mt-10 gap-[150px]">
        <CardList page={page} cat={cat} />
        <Sidebar />
      </div>
    </div>
  );
};

export default CategoryPage;
