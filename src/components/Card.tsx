import * as React from "react";
import { TshirtData } from "../types/Api";

interface ICardProps {
  data: TshirtData;
}

const Card = ({ data }: ICardProps) => {
  return (
    <div className="flex flex-col border-2 gap-5 p-4">
      <header className="text-center bg-slate-200 p-3 rounded-lg">{data.name}</header>
      <img className="self-center" src={data.imageURL} alt={data.name} height="300px" width="250px" />
      <div className="flex justify-around">
        <text className="font-bold self-center">Rs. {data.price}</text>
        <button className="font-bold py-2 px-4 rounded bg-black text-white hover:bg-white hover:text-black hover:border-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
