import React from "react";
interface Props {
  value: string;
  bgcolor: string;
}
const LongButton = ({ value, bgcolor = "blue" }: Props) => {
  return (
    <button
      style={{ backgroundColor: bgcolor }}
      className={` w-full py-2 rounded-lg text-white my-3`}
    >
      {value}
    </button>
  );
};

export default LongButton;
