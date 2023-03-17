import React from "react";

export const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`inline-block w-20 p-1 rounded mt-2 border bg-indigo-400 text-slate-100 hover:bg-indigo-400 duration-75 font-light ${className}`}
    >
      {children}
    </button>
  );
};
