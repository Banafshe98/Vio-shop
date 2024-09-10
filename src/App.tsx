import React from "react";
import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import "./index.css";
import { Layout } from "./components/Layout";
import { Product } from "./components/Product";
import Cart from "./pages/Cart";
import { ShoppingCartContext } from "./context/ShoppingCartContext";

function App() {
  
  return (
    <ShoppingCartContext.Provider value={{}}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Layout>
    </ShoppingCartContext.Provider>
  );
}

export default App;
