import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./Button";
import { Container } from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { IProduct as IProduct } from "../types/server";
import { getProduct } from "../Services/api";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export const Product = () => {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    cartItems,
    getProductQty, 
    handleRemoveProduct
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  

  return (
    <div>
      <Container>
        <div className="flex flex-row-reverse mt-20">
          <img className="rounded w-5/12" src={product?.image} alt="" />
          <div className="flex flex-col pr-7 gap-10 w-full">
            <div className="flex flex-row font-bold text-2xl space-x-2 justify-end items-center">
              <h1 className="text-black">{params.id}</h1>
              <p className="text-black">عینک کد</p>
            </div>

            <div className="flex flex-row items-center space-x-2 justify-end">
              <p className="text-indigo-500 text-lg">تومان</p>
              <p className="text-indigo-500 text-4xl">{product?.price}</p>
            </div>
            <div className="text-xl font-bold flex flex-row-reverse justify-between">
              <div className="flex-row justify-center">
                {getProductQty(parseInt(params.id as string)) === 0 ? (
                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    variant="success"
                  >
                    اضافه به سبد خرید
                  </Button>
                ) : (
                  <div className="">
                    <Button
                      onClick={() =>
                        handleIncreaseProductQty(parseInt(params.id as string))
                      }
                      variant="success"
                    >
                      اضافه به سبد خرید
                    </Button>
                    <span> {getProductQty(parseInt(params.id as string))}</span>

                    <Button
                      onClick={() =>
                        handleDecreaseProductQty(parseInt(params.id as string))
                      }
                      variant="success"
                    >
                      کم
                    </Button>
                    <Button variant="danger" onClick={()=>handleRemoveProduct(parseInt(params.id as string))}>حذف از سبد خرید</Button>
                  </div>
                )}
              </div>

              <div className="flex flex-row gap-5 items-center text-slate-400">
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faPaperPlane} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
            <div className="text-right text-black text-lg leading-loose">
              <p className="line-clamp-1">{product?.description}</p>
              <p className="line-clamp-1">{product?.description}</p>
              <p className="line-clamp-1">{product?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
