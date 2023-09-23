import React from "react";
import Link from "next/link";
import { catLinks } from "@/utils/constants";
import Image from "next/image";

const Sidebar = () => {
  const renderedCatLinks = catLinks.map((link) => {
    return (
      <Link
        href="/"
        key={link.id}
        className={` bg-blue-500  py-2 rounded-lg w-[80px] text-sm text-center`}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <div className="flex-[30%]">
      <span className="text-gray-400">What&apos;s hot?</span>
      <h3 className="text-4xl font-bold mt-4">Most Popular</h3>
      <div className="mt-10 flex flex-col gap-4">
        <div className="bg-red-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
          Travel
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          odio earum et accusantium consequatur animi?
        </p>
        <div className="flex gap-4 text-sm">
          <span>John Doe</span>
          <span>09.09.2023</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="bg-yellow-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
          Culture
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          odio earum et accusantium consequatur animi?
        </p>
        <div className="flex gap-4 text-sm">
          <span>John Doe</span>
          <span>09.09.2023</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="bg-blue-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
          Coding
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          odio earum et accusantium consequatur animi?
        </p>
        <div className="flex gap-4 text-sm">
          <span>John Doe</span>
          <span>09.09.2023</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="bg-green-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
          Fashion
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          odio earum et accusantium consequatur animi?
        </p>
        <div className="flex gap-4 text-sm">
          <span>John Doe</span>
          <span>09.09.2023</span>
        </div>
      </div>

      <div className="mt-10">
        <span className="text-gray-400">Discover by Topic</span>
        <h3 className="text-4xl font-bold mt-4">Categories</h3>
        <div className="flex gap-4 flex-wrap mt-10">{renderedCatLinks}</div>
      </div>

      <div className="mt-10">
        <span className="text-gray-400">Chosen by the editor</span>
        <h3 className="text-4xl font-bold mt-4">Editor&apos;s pick</h3>
        <div className="flex gap-4 mt-10">
          <div className="w-16 h-16 relative">
            <Image
              src="/p1.jpeg"
              alt="editor img"
              fill
              className="rounded-full object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-red-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
              Travel
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda repellendus reprehenderit laboriosam magni nobis
              aperiam!
            </p>
            <div className="flex gap-4 text-sm">
              <span>John Doe</span>
              <span>09.09.2023</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <div className="w-16 h-16 relative">
            <Image
              src="/p1.jpeg"
              alt="editor img"
              fill
              className="rounded-full object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-yellow-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
              Culture
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda repellendus reprehenderit laboriosam magni nobis
              aperiam!
            </p>
            <div className="flex gap-4 text-sm">
              <span>John Doe</span>
              <span>09.09.2023</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <div className="w-16 h-16 relative">
            <Image
              src="/p1.jpeg"
              alt="editor img"
              fill
              className="rounded-full object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-blue-500 px-2 py-1 rounded-xl w-20 text-center text-sm">
              Coding
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda repellendus reprehenderit laboriosam magni nobis
              aperiam!
            </p>
            <div className="flex gap-4 text-sm">
              <span>John Doe</span>
              <span>09.09.2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
