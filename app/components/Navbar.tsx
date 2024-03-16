import React from "react";
import cart from "@/public/svg/cart.svg";
import user from "@/public/svg/user.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="py-2 bg-primary  flex items-center justify-center text-text w-screen text-[12px] ">
        Free Express Shipping on all orders with all duties included
      </div>
      <div className="flex items-center h-[80px] px-[3%] text-text">
        <div className="flex-1 flex items-center ">
          <div>
            <h2 className="font-bold text-[20px] text-blue-500">PLASHOE</h2>
          </div>
          <div className="ml-7">
            <ul className="flex items-center">
              <li className="mx-3 text-sm font-medium">MEN</li>
              <li className="mx-3 text-sm font-medium">WOMEN</li>
              <li className="mx-3 text-sm font-medium">COLLECTION</li>
              <li className="mx-3 text-sm font-medium">LOOKBOOK</li>
              <li className="mx-3 text-sm font-medium">SALE</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <ul className="flex items-center">
            <li className="mx-3 text-sm font-medium">OUR STORY</li>
            <li className="mx-3 text-sm font-medium">CONTACT</li>
            <li className="mx-3">
              <Image src={cart} alt="cart" width={24} />
            </li>
            <li className="mx-3">
              <Image src={user} alt="cart" width={24} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
