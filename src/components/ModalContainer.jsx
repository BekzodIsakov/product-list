import React from "react";

export const ModalContainer = ({ children, handleOnClose }) => {
  return (
    <div
      className='w-full h-full bg-black/70 absolute top-0 flex items-center justify-center'
      onClick={handleOnClose}
    >
      <div
        className='bg-white rounded-md shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
