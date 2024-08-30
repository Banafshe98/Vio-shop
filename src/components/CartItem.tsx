import React from "react";
import img1 from "../assets/Bracelet.jpg";
import { Button } from "./Button";

function CartItem() {
  return (
    <>

    <div className="flex flex-row-reverse my-6 items-center border-b-2 pb-2">
      <img className="rounded w-28" src={img1} alt="" />

      <div className="mr-6 flex flex-row-reverse justify-between w-full">
        <div className="flex flex-col">
          <h1 className="mb-1 text-right ">عینک کد</h1>
          <h1 className="mb-1 text-right ">رنگ</h1>
        </div>

        <div>
          <Button variant="primary">+</Button>
          <span className="p-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>

        <Button variant="danger">حذف از سبد خرید</Button>
      </div>
    </div>
    </>
  );
}

export default CartItem;
