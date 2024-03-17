"use client";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Drawer from "@/app/components/drawer/Drawer";
import Card from "@/app/components/card/Card";
import { useParams } from "next/navigation";
const page = () => {
  const [value, setValue] = useState(500);
  const { category } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
  };
  return (
    <>
      <div className="h-full bg-primary flex items-center justify-center px-[10%] py-[2.3%]">
        <div className="bg-white w-full p-[25px]">
          <h4 className="text-secondary text-[45px] font-semibold">
            {category}
          </h4>
          <div className="flex items-center justify-between my-6">
            <div className="flex items-center">
              <button className="flex hover:bg-black items-center justify-center px-3 py-2 rounded-md text-white bg-secondary">
                <DehazeIcon />
                <label htmlFor="filter">
                  <span className="mx-2">filter Shoes</span>
                </label>
              </button>
              <h5 className="ml-4">showing all 8 results</h5>
            </div>
            <div className="flex items-center ">
              <select name="" id="" className="p-3 bg-white w-[200px] ">
                <option value="Default sorting">Default sorting</option>
                <option value="Default sorting">Default sorting</option>
                <option value="Default sorting">Default sorting</option>
              </select>
              <div className="flex items-center ml-4">
                <DashboardIcon className="hover:text-secondary cursor-pointer h-5" />
                <ViewQuiltIcon className="hover:text-secondary cursor-pointer h-5" />
                <Drawer id="filter" width={20} position="">
                  <div className="p-5">
                    <input
                      type="text"
                      placeholder="Serach Product ..."
                      className="p-3 border rounded-md bg-white w-full my-4"
                    />
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <h4 className="text-2xl text-secondary font-medium">
                        Filter by price{" "}
                      </h4>
                      <div className="w-full my-6">
                        <input
                          type="range"
                          min={200}
                          max="5000"
                          value={value}
                          className="range w-full"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <div className="p-3 shadow-md border">INR - 200</div>
                        <div className="p-3 shadow-md border">
                          INR - {value}
                        </div>
                      </div>
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-4 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
