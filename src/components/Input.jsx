import React from "react";

export const Input = ({ className = "", ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        className={` w-full rounded border bg-transparent px-2 py-1 ${className} placeholder:font-light`}
      />
    </div>
  );
};
