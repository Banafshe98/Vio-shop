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
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import privateRoute from "./components/privateRoute";

function App() {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route element={<privateRoute/>}>
            <Route path="/Cart" element={<Cart />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
