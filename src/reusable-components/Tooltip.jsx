import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "@reusable-components";

export const Tooltip = ({ handleCancel, handleDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const cancelBtnRef = useRef();

  const handleOnDelete = () => {
    setIsLoading(true);
    handleDelete();
  };

  const arrowStyle =
    " after:absolute after:left-[90%] after:bottom-[100%] after:-translate-x-0.5 after:border-4 after:border-x-transparent after:border-t-transparent after:border-b-black/60";

  useEffect(() => {
    const detectOutsideClick = (e) => {
      if (
        e.target === cancelBtnRef ||
        !e.target.closest(".tooltip-container")
      ) {
        handleCancel();
      }
    };

    window.addEventListener("click", detectOutsideClick);

    return () => {
      window.removeEventListener("click", detectOutsideClick);
    };
  }, [handleCancel]);

  return (
    <div
      className={`absolute top-8 w-max right-1.5 bg-black/60 text-gray-100 text-sm px-2 pt-2 pb-0.5 rounded backdrop-blur-sm ${arrowStyle}`}
    >
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
