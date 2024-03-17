import React from "react";
import shoes from "@/public/image/shoe.jpg";
import Image from "next/image";
const Product = () => {
  return (
    <div className="h-full bg-primary flex items-center justify-center px-[10%] py-[2.3%]">
      <div className="bg-white p-[30px] ">
        <div className="flex  h-full  w-full ">
          <div className="flex-1 bg-green-200 mr-4 overflow-hidden">
            <Image
              src={shoes}
              alt="shoes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-4 flex flex-col justify-between">
            <div>
              <h4 className="text-lg  text-secondary">Men, Sneaker</h4>
              <h2 className="text-2xl text-black my-4">Men's Classic Blue</h2>
              <div className="flex items-center text-lg">
                <span className="line-through text-gray-300 mr-2 text-2xl">
                  $79.90
                </span>
                <h4 className="text-2xl font-medium ">$69.90</h4>
                <p className="mx-2">& Free Shipping</p>
              </div>
              <div className="my-4">
                <p className="text-lg leading-[30px]">
                  Auctor eros suspendisse tellus venenatis sodales purus non
                  pellentesque amet, nunc sit eu, enim fringilla egestas
                  pulvinar odio feugiat consectetur egestas magna pharetra
                  cursus risus, lectus enim eget eu et lobortis faucibus.
                </p>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-secondary text-white ">
                ADD TO CART
              </button>
              <hr className="my-4" />
              <p>
                Categories :{" "}
                <span className="text-secondary"> Men, Sneaker</span>
              </p>
              <div className=" relative p-5 border rounded-md my-6 flex items-center justify-center">
                <ul className="flex">
                  <li className="mx-2">a</li>
                  <li className="mx-2">a</li>
                  <li className="mx-2">a</li>
                </ul>
                <div className="absolute bg-white px-3 text-lg font-semibold -top-[15px]">
                  Guaranteed Safe Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
