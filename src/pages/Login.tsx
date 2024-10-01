import React from "react";
import { Container } from "../components/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { handleLogin } = useShoppingCartContext();
  return (
    <Container>
      <div className="p-12 rounded bg-red-200 flex flex-col gap-8 items-center">
        <input
          className="max-w-xs pl-2 py-2 rounded"
          type="text"
          placeholder="username"
        />
        <input
          className="max-w-xs pl-2 py-2 rounded"
          type="password"
          placeholder="password"
        />
          <button
            onClick={handleLogin}
            className="bg-green-600 px-6 py-1 border-2 rounded"
          >
            login
          </button>
      </div>
    </Container>
  );
};
