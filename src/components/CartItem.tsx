import React, { useEffect, useState } from "react";
import img1 from "../assets/Bracelet.jpg";
import { Button } from "./Button";
import { getProduct } from "../Services/api";
import { IProduct } from "../types/server";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}
function CartItem({id,qty}: ICartItem) {
  const [product, setProduct] = useState<IProduct>()

  const {handleDecreaseProductQty,handleIncreaseProductQty,handleRemoveProduct} = useShoppingCartContext()

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-row-reverse my-6 items-center border-b-2 pb-2">
       <Link to ={`/product/${id}`}>
       <img className="rounded w-28" src={product?.image} alt="" />

       </Link>

        <div className="mr-6 flex flex-row-reverse justify-between w-full">
          <div className="flex flex-col">
            <h1 className="mb-1 text-right"> {product?.title}</h1>
          </div>

          <div>
            <Button onClick={()=>{handleIncreaseProductQty(id)}} variant="primary">+</Button>
            <span className="p-2">{qty}</span>
            <Button onClick={()=>{handleDecreaseProductQty(id)}} variant="primary">-</Button>
          </div>

          <Button onClick={()=> {handleRemoveProduct(id)}} variant="danger">حذف از سبد خرید</Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
