import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../assets/Bracelet.jpg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface Params {
  id: string; // Define the type for your route parameters
}
export const Product = () => {
  const params = useParams<Params>(); // Call useParams to get the parameters
  return (
    <div>
      <Container>
        <div className="flex flex-row-reverse mt-20">
          <img className="rounded w-5/12" src={img1} alt="" />
          <div className="flex flex-col pr-7 gap-10 w-full">
            <div className="flex flex-row font-bold text-2xl space-x-2 justify-end items-center">
              <h1 className="text-black">{params.id}</h1>
              <p className="text-black">عینک کد</p>
            </div>

            <div className="flex flex-row items-center space-x-2 justify-end">
              <p className="text-indigo-500 text-lg">تومان</p>
              <p className="text-indigo-500 text-4xl">۱۸۸/۰۰۰</p>
            </div>
            <div className="text-xl font-bold flex flex-row-reverse justify-between">
              <Button onClick={()=>{alert("به سبد خرید اضافه شد")}}>اضافه به سبد خرید</Button>
              <div className="flex flex-row gap-5 items-center text-slate-400">
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faPaperPlane} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
            <div className="text-right text-black text-lg leading-loose">
              <p>جنس استیل</p>
              <p>کاملا رنگ ثابت</p>
              <p>بدون جنسیت</p>
            </div>
          </div>
        </div>
      </Container>
    </div> 
  );
};
