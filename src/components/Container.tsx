import React from "react";

type IContainer = {
  children: React.ReactNode;
}

export const Container = ({ children }:IContainer) => {
  return (
    <div className="container mx-auto px-52">{children}</div>
  );
};
