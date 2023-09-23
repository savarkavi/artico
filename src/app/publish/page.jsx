"use client";

import React, { useEffect, useState } from "react";
import {
  AiOutlinePlusCircle,
  AiFillFileImage,
  AiOutlineUpload,
  AiOutlinePlaySquare,
} from "react-icons/ai";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useRouter } from "next/navigation";

const Publish = () => {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("coding");

  const handleOpenBtn = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async () => {
    const res = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: category,
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/post/${data?.slug}`);
    }
  };

  return (
    <div className="flex flex-row-reverse justify-between items-start min-h-screen">
      <div className="flex items-center gap-4">
        <select
          className="w-[100px] py-2 mt-5 px-3 text-black rounded-lg"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="coding">coding</option>
          <option value="travel">travel</option>
          <option value="fashion">fashion</option>
          <option value="style">style</option>
          <option value="culture">culture</option>
          <option value="food">food</option>
        </select>
        <button
          className="bg-green-500 px-3 py-2 rounded-lg mt-5"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      <div className="mt-20 max-w-[1200px]">
        <div className="flex flex-col gap-8">
          <textarea
            type="text"
            placeholder="Title"
            className="bg-slate-950 px-12 py-2 text-4xl outline-none w-[1200px]"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-16 items-center">
            <button className="" onClick={handleOpenBtn}>
              <AiOutlinePlusCircle className="text-4xl" />
            </button>
            {open && (
              <div className="flex gap-3 text-4xl text-green-500 ">
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
                <button className="">
                  <label htmlFor="image" className="cursor-pointer">
                    <AiFillFileImage className="border border-green-500 rounded-full p-2" />
                  </label>
                </button>
                <button>
                  <AiOutlineUpload className="border border-green-500 rounded-full p-2" />
                </button>
                <button>
                  <AiOutlinePlaySquare className="border border-green-500 rounded-full p-2" />
                </button>
              </div>
            )}
          </div>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your article..."
            className="bg-slate-950 h-[1000px] outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Publish;
