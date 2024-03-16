import React from "react";
interface Props {
  value: String;
}
const Buttons = ({ value }: Props) => {
  return (
    <button className="bg-white rounded-md  py-3 px-7 text-black hover:bg-black hover:text-white transition-all duration-300 ">
      {value}
    </button>
  );
};

export default Buttons;
