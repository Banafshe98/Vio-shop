//import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../assets/Bracelet.jpg";

import { Container } from "../components/Container";
interface Params {
  id: string; // Define the type for your route parameters
}
export const Product = () => {
  const params = useParams<Params>(); // Call useParams to get the parameters
  return (
    <div>
      <Container>
        <div className="flex flex-row-reverse justify-start mt-20 ">
          <img className="rounded w-5/12" src={img1} alt="" />
          <div className="flex flex-col pr-7 gap-10">
            <div className="flex flex-row font-bold text-2xl space-x-2 justify-end items-center">
              <h1 className="text-black">{params.id}</h1>
              <p className="text-black">عینک کد</p>
            </div>

            <div className="flex flex-row items-center space-x-2 justify-end">
              <p className="text-indigo-500 text-lg">تومان</p>
              <p className="text-indigo-500 text-5xl">۱۸۸</p>
            </div>
            <div className="text-white bg-green-400 rounded text-xl px-10 py-4 font-bold flex flex-row justify-between">
              <button className="" type=""> اضافه به سبد خرید</button>
              <span></span>
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
