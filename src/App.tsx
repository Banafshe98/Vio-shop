import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import "./index.css";
import { Layout } from "./components/Layout";
import { Product } from "./components/Product";
import Cart from "./pages/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/PrivateRoute";
import { Login } from "./pages/Login";

function App() {

  const {isLogin} = useShoppingCartContext()

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Login" element={isLogin ? <Navigate to="/"/> : <Login/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/Cart" element={<Cart />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
  );
}

export default App;
