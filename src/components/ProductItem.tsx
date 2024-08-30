import React from "react";
import img1 from "../assets/Bracelet.jpg";
export const ProductItem = () => {
  return (
    <div className="shadow border rounded pb-3">
      <img className="rounded-t" src={img1} alt="" />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h1> عنوان محصول</h1>
        <span>99$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
        لورم یسص بیل  یس ب س  س لبسی بلسبل س بیبلبث  بثبث  بلیسبس بصسبسسسب ببشب</p>

      </div>
    </div>
  );
};
