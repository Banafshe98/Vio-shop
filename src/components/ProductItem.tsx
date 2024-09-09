import React from "react";
import { IProduct } from "../types/server";

type ProductItem = IProduct;
export const ProductItem = ({ title, price, description,image , category }: ProductItem) => {
  return (
    <div className="shadow border rounded pb-3">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h1 className="line-clamp-1">{title}</h1>
        <span>{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">{description}</p>
      </div>
    </div>
  );
};
