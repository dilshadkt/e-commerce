"use client";
import React from "react";
import cart from "@/public/svg/cart.svg";
import user from "@/public/svg/user.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import UserProfile from "../(user)/UserProfile";
import Link from "next/link";
const Navbar = () => {
  const navigator = useRouter();
  const logOut = () => {
    console.log("object");
    navigator.push("/auth/login");
    Cookies.remove("token");
  };
  const OpenProfile = () => {
    const Profile = document.getElementById(
      "user_profile"
    ) as HTMLDialogElement | null;
    if (Profile) {
      Profile.showModal();
    }
  };
  return (
    <nav>
      <div className="py-2 bg-primary  flex items-center justify-center text-text w-screen text-[12px] ">
        Free Express Shipping on all orders with all duties included
      </div>
      <div className="flex items-center h-[80px] px-[3%] text-text ">
        <div className="flex-1 flex items-center ">
          <div>
            <Link href={"/"}>
              <h2 className="font-bold text-[20px] text-blue-500">PLASHOE</h2>
            </Link>
          </div>
          <div className="ml-7">
            <ul className="flex items-center">
              <Link href={"/collection/men"}>
                <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                  MEN
                </li>
              </Link>
              <Link href={"/collection/women"}>
                <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                  WOMEN
                </li>
              </Link>
              <Link href={"/collection/all"}>
                <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                  COLLECTION
                </li>
              </Link>
              <Link href={"/collection/lookbook"}>
                <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                  LOOKBOOK
                </li>
              </Link>
              <Link href={"/collection/sale"}>
                <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                  SALE
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <ul className="flex items-center">
            <Link href={"/collection/ourStory"}>
              <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                OUR STORY
              </li>
            </Link>
            <Link href={"/collection/all"}>
              <li className="mx-3 text-sm font-medium hover:text-blue-500 cursor-pointer">
                CONTACT
              </li>
            </Link>
            <li className="mx-3 cursor-pointer  ">
              <label htmlFor="my-drawer-4">
                <Image src={cart} alt="cart" width={24} />
              </label>
            </li>
            <li className="mx-3 cursor-pointer relative" onClick={OpenProfile}>
              <Image src={user} alt="cart" width={24} />
            </li>
          </ul>
        </div>
      </div>
      <UserProfile logout={logOut} />
    </nav>
  );
};

export default Navbar;
