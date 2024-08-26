import React, { ComponentProps } from "react";
type TButton =ComponentProps<"button">
export const Button=({children, ...rest}:TButton)=>{

    return(
        <button {...rest} className="text-white bg-green-400 rounded px-10 py-4"
        type="submit">
        {children}
      </button>
    )
}