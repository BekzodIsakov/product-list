import React, { useContext, useEffect, useRef, useState } from "react";
import { Spinner } from "./Spinner";

export const Tooltip = ({ handleCancel, handleDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const cancelBtnRef = useRef();

  const handleOnDelete = () => {
    setIsLoading(true);
    handleDelete();
  };

  useEffect(() => {
    const detectOutsideClick = (e) => {
      if (
        e.target === cancelBtnRef &&
        !e.target.closest(".tooltip-container")
      ) {
        console.log("clsoing");
        handleCancel();
      }
    };

    window.addEventListener("click", detectOutsideClick);

    return () => {
      window.removeEventListener("click", detectOutsideClick);
    };
  }, [handleCancel]);

  return (
    <div className='absolute top-8 w-max right-1.5 bg-black/60 text-gray-100 text-sm px-2 pt-2 pb-0.5 rounded backdrop-blur-sm'>
      <p>Delete this product?</p>
      <div className='flex justify-end gap-x-1.5'>
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            onClick={handleOnDelete}
            className='p-1 text-red-400 hover:text-red-500 duration-75'
          >
            Delete
          </button>
        )}
        <button
          ref={cancelBtnRef}
          className='p-1 hover:text-gray-300 duration-75'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
