import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { ProductItem } from "../components/ProductItem";
import { Link } from "react-router-dom";
import axios from "axios";
import { getProducts } from "../Services/api";
export const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-right mt-5">Vio Shop</h1>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {products.map((item) => (
          <Link to={`/Product/${1}`}>
            <ProductItem />
          </Link> 
        ))}
      </div>
    </Container>
  );
};
