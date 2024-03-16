"use client";
import LongButton from "@/app/components/Buttons/LongButton";
import TextField from "@/app/components/TextFiled/TextField";
import Load from "@/app/components/load/Load";
import axios from "@/app/config/axios/axiosInstance";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const page = () => {
  const { register, handleSubmit, watch } = useForm();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean | string>(false);
  const navigator = useRouter();
  const OnSubmit = handleSubmit(() => {
    setLoading(true);
    axios
      .post("auth/logIn", watch())
      .then((res) => {
        setLoading(false);
        Cookies.set("token", res.data.token);
        navigator.replace("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 shadow-2xl rounded-lg w-[25%]">
        <h4 className="text-[22px] text-blue-500 font-semibold my-4 text-center">
          Login
        </h4>
        <form onSubmit={OnSubmit}>
          <TextField
            type="text"
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
          {error && <p className="text-[12px] my-2 text-red-500">{error}</p>}
          <LongButton bgcolor="#098ffd" value="login" />
        </form>
        {loading && <Load />}
      </div>
    </div>
  );
};

export default page;
