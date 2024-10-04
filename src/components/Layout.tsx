import React from "react";
import { Navbar } from "./Navbar";
import { Welcome } from "./Welcome";
interface Ilayout {
  children: React.ReactNode;
}
export const Layout = ({ children }: Ilayout) => {
  return (
    <>
      <Navbar />
      <Welcome />

      {children}
    </>
  );
};
