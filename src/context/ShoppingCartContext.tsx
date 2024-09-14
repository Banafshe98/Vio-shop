import { createContext, useContext, useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
}
export const ShoppingCartContext = createContext({} as ShoppingCartContext);
  
export const useShoppingCartContext =()=>{
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProvider) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleIncreaseProductQty =(id:number)=>{
    
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
