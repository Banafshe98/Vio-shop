import React, { useContext } from "react";
import { Container } from "../components/Container";
import CartItem from "../components/CartItem";
import { Button } from "../components/Button";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

function Cart() {
  const {cartItems} = useContext(ShoppingCartContext)

  cartItems.map
  return (
    <Container>
      <div className="flex flex-nowrap justify-between mt-6 mb-4 p-6 bg-slate-300">
        <p>محصول</p>
        <p>تعداد</p>
        <p>جمع قیمت</p>
      </div>
      <div className="mt-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="text-right bg-gray-100 p-4 rounded">
        <p>مبلغ کل</p>
        <p>سود شما از این خرید</p>
        <p>قیمت نهایی</p>
      </div>
      <Button className="mt-6" variant="success">ثبت سفارش</Button>
    </Container>
  );
}

export default Cart;
