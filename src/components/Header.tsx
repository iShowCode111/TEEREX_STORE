import * as React from "react";
import { BsCart3 } from "react-icons/bs";

interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  return (
    <div className="p-5 bg-slate-300 flex justify-between">
      <h1 className="text-xl font-bold self-center">TeeRex Store</h1>
      <div className="flex gap-7">
        <h2 className="self-center">Products</h2>
        <button className="p-3 bg-gray-300 rounded hover:bg-slate-400">
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default Header;
