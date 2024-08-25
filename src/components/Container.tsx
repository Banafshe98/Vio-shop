import React from "react";

interface IContainer {
  children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className="container mx-auto px-52">{children}</div>
  );
};
