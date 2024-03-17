import Image from "next/image";
import React from "react";
import load from "@/public/gif/load.gif";
const Load = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 m-auto bg bg-black opacity-60"></div>
      <div className="fixed top-0 left-0 bottom-0 right-0 m-auto flex items-center justify-center ">
        <Image src={load} alt="load animation" unoptimized />
      </div>
    </>
  );
};

export default Load;
