import React from "react";
import sprite from "@assets/sprite.svg";

export const Icon = ({ className, name, ...rest }) => {
  return (
    <svg className={`w-3 h-3 ${className}`} {...rest}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};
