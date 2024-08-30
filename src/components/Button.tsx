import React, { ComponentProps } from "react";

type TButton = ComponentProps<"button"> & { variant?: TVariant };
type TVariant = "primary" | "secondary" | "success" | "warning" | "danger";

export const Button = ({ children, variant, className, ...rest }: TButton) => {
  // Combine class names into a single string
  const classes = `${className || ''} ${checkVariant(variant)}`;

  return (
    <button className={classes} {...rest} type="submit">
      {children}
    </button>
  );
};

export const checkVariant = (variant?: TVariant) => {
  switch (variant) {
    case "primary":
      return "text-white bg-green-400 rounded px-4 py-1 m-1";
    case "secondary":
      return "text-gray-700 bg-gray-200 rounded px-4 py-1 m-1";
    case "success":
      return "text-white bg-green-600 rounded px-4 py-1 m-1";
    case "warning":
      return "text-white bg-yellow-500 rounded px-4 py-1 m-1";
    case "danger":
      return "text-white bg-red-600 rounded px-4 py-1 m-1";
    default:
      return "success"
  }
};