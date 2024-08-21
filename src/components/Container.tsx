import React from "react";
interface IContainer {
  children: React.ReactNode;
}
export const Container = ({ children }: IContainer) => {
  return <div className="container mx-auto">{children}</div>;
};
