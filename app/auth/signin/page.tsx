"use client";
import LongButton from "@/app/components/Buttons/LongButton";
import TextField from "@/app/components/TextFiled/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "@/app/config/axios/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Load from "@/app/components/load/Load";
import Link from "next/link";
const page = () => {
  const { register, watch, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);
  const navigator = useRouter();
  const OnSubmit = handleSubmit(() => {
    setLoading(true);
    if (watch().password === watch().confirmPassword) {
      axios
        .post("auth/signIn", watch())
        .then((res) => {
          Cookies.set("token", res.data.token);
          navigator.replace("/");
        })
        .catch((err) => {
          setLoading(false);

          setError(err.response.data.error);
        });
    } else {
      setLoading(false);
      setError("passwords are not equal");
    }
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 shadow-2xl rounded-lg w-[25%]">
        <h4 className="text-[22px] text-blue-500 font-semibold my-4 text-center">
          Sign In
        </h4>
        <form onSubmit={OnSubmit}>
          <TextField
            type="text"
            placeHolder="User Name"
            value={register}
            name="name"
          />
          <TextField
            type="email"
            placeHolder="Email"
            value={register}
            name="email"
          />
          <TextField
            type="password"
            placeHolder="Password"
            value={register}
            name="password"
          />
          <TextField
            type="password"
            placeHolder="Confirm Password"
            value={register}
            name="confirmPassword"
          />
          {error && <p className="text-[12px] my-2 text-red-500">{error}</p>}
          <LongButton bgcolor="#098ffd" value="SignIn" />
          <p className="text-[13px]">
            Already have an account ?{" "}
            <Link href={"/auth/login"}>
              <span className="cursor-pointer font-bold">Login</span>
            </Link>
          </p>
        </form>
        {loading && <Load />}
      </div>
    </div>
  );
};

export default page;
