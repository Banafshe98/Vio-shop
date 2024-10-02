import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../Services/api";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogin: (username:string,password:string) => void;
  handleLogOut: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProvider) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()


  const handleLogin = (username:string,password:string) => {
    login(username, password).finally(() => {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/Login");
    localStorage.removeItem("token")
  };

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      setIsLogin(true);
    }
  }, []);
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
