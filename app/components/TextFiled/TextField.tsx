import React from "react";
interface Props {
  placeHolder: string;
  type: string;
  value: any;
  name: string;
}
const TextField = ({ placeHolder, type = "text", value, name }: Props) => {
  return (
    <input
      {...value(`${name}`)}
      type={type}
      className="p-2 rounded-lg border bg-white w-full my-2"
      placeholder={placeHolder}
      required
    />
  );
};

export default TextField;
