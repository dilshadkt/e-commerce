import React from "react";
interface Props {
  id: string;
  position: string;
  children: React.ReactNode;
  width: number;
}
const Drawer = ({ id, position = "drawer", children, width }: Props) => {
  return (
    <div className={`drawer ${position}  z-20`}>
      <input id={id} type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* ///////// upcoming component /////// */}
        <div
          style={{ width: `${width}%` }}
          className={`menu bg-white p-0  min-h-full text-base-content`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
