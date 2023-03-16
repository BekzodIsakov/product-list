import React from "react";
import { Icon } from "./Icon";

export const ModalContainer = ({ children, handleOnClose }) => {
  return (
    <div
      className='w-full h-full bg-black/70 fixed top-0 flex items-center justify-center'
      onClick={handleOnClose}
    >
      <div
        className='bg-white rounded-md shadow-xl relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleOnClose}
          className='absolute top-2 right-2 bg-gray-200 p-1 rounded-sm'
        >
          <Icon name='x' />
        </button>
        {children}
      </div>
    </div>
  );
};
