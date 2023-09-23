"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="mt-20 flex justify-center">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="bg-slate-800 my-28 max-w-[500px] mx-auto flex flex-col items-center gap-16 py-32 rounded-lg">
      <div
        className="flex gap-2 text-2xl items-center bg-red-500 px-3 py-3 rounded-lg w-[250px] h-[60px] justify-center cursor-pointer"
        onClick={() => signIn("google")}
      >
        <AiFillGoogleCircle />
        <span className="text-base">Sign in with Google</span>
      </div>

      <div className="flex gap-2 text-2xl items-center bg-black px-3 py-3 rounded-lg w-[250px] h-[60px] justify-center cursor-pointer">
        <AiFillGithub />
        <span className="text-base">Sign in with Github</span>
      </div>

      <div className="flex gap-2 text-2xl items-center bg-blue-500 px-3 py-3 rounded-lg w-[250px] h-[60px] justify-center cursor-pointer">
        <AiFillFacebook />
        <span className="text-base">Sign in with Facebook</span>
      </div>
    </div>
  );
};

export default Login;
