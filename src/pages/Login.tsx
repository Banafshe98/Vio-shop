import React, { ChangeEventHandler, useState } from "react";
import { Container } from "../components/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export const Login = () => {
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target;
    setUser({...user,
      [name] : value,
    });
  };

  return (
    <Container>
      <div className="p-12 rounded bg-red-200 flex flex-col gap-8 items-center">
        <input onChange={handleChange}
          className="max-w-xs pl-2 py-2 rounded"
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
        />
        <input
        onChange={handleChange}
          className="max-w-xs pl-2 py-2 rounded"
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
        />
        <button
          onClick={()=>handleLogin (user.username,user.password) }
          className="bg-green-600 px-6 py-1 border-2 rounded"
        >
          login
        </button>
      </div>
    </Container>
  );
};
