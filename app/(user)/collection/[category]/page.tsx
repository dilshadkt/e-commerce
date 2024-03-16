import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
const page = () => {
  return (
    <div className="h-full bg-primary flex items-center justify-center px-[10%] py-[2.3%]">
      <div className="bg-white w-full p-[25px]">
        <h4 className="text-secondary text-[45px] font-semibold">Men</h4>
        <div className="flex items-center justify-between my-6">
          <div className="flex items-center">
            <button className="flex items-center justify-center p-3 text-white bg-secondary">
              filter Shoes
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
              <DashboardIcon />
              <ViewQuiltIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
