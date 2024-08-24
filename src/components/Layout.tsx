import React from "react";
import { Navbar } from "./Navbar";
interface Ilayout {
  children: React.ReactNode;
}
export const Layout = ({ children }: Ilayout) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
