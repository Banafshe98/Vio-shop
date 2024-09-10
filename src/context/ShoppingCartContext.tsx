import { createContext, useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
export const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }: ShoppingCartProvider) => {
  const [CartItems, setCartItems] = useState([])

  return (
    <ShoppingCartContext.Provider value={{CartItems}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
