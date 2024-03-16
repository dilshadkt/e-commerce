"use client";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Drawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white p-0 w-[35%] min-h-full text-base-content">
          <div className="p-4 flex items-center justify-start">
            <h4 className="text-black text-lg">Shopping Cart</h4>
          </div>
          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
