import Image from "next/image";
import React from "react";
import shoe from "@/public/image/shoe.jpg";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/collection/product/adg"}>
      <div className="cursor-pointer flex flex-col  rounded-md overflow-hidden">
        <div className=" group transition-all duration-500 relative w-full h-full  overflow-hidden">
          <Image
            src={shoe}
            alt="shoes"
            className="hover:scale-110 transition-all duration-500"
          />
          <div className="absolute group-hover:flex  hidden bg-green-950  items-center justify-center text-white hover:bg-black left-0 right-0 m-auto bottom-0 ">
            <h5 className="py-[6px]">Qucick View</h5>
          </div>
        </div>
        <div className="p-5 flex flex-col items-center justify-center">
          <h3 className="text-black font-semibold text-[16px]">
            {" "}
            Women's green training
          </h3>
          <h4 className="text-gray-600 font-bold">
            <span className="text-gray-400 text-[12px] line-through mx-1">
              $1000
            </span>
            500
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
