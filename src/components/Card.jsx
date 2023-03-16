import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Context } from "../context/Provider";
import { Icon } from "./Icon";
import { Input } from "./Input";
import { ModalContainer } from "./ModalContainer";
import { Tooltip } from "./Tooltip";
import { Form } from "./Form";

export const Card = ({ product }) => {
  const [_, actions] = useContext(Context);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className='text-sm'>
      <div className='mb-2 relative'>
        <div className='tooltip-container absolute right-0 p-1'>
          <button
            className='p-1 bg-slate-700/50 text-white rounded-sm mr-1'
            title='edit'
            onClick={() => setShowEditModal(!showEditModal)}
          >
            <Icon name='pencil' />
          </button>
          {showEditModal &&
            createPortal(
              <ModalContainer handleOnClose={() => setShowEditModal(false)}>
                <Form />
              </ModalContainer>,
              document.body
            )}
          <button
            className='p-1 bg-slate-700/50 text-white rounded-sm'
            title='delete'
            onClick={() => setShowDeleteModal(!showDeleteModal)}
          >
            <Icon name='trash-can' />
          </button>
          {showDeleteModal && (
            <Tooltip
              handleCancel={() => setShowDeleteModal(false)}
              handleDelete={() => actions.deleteProduct(product.id)}
            />
          )}
        </div>
        <img
          src={product.imageSrc}
          alt={product.name}
          className='w-full rounded-md aspect-square object-cover'
        />
      </div>
      <div className='flex justify-between font-semibold mb-2'>
        <h3 className=''>{product.name}</h3>
        <div>${product.price}</div>
      </div>
      <div className='flex justify-between relative font-semibold text-xs text-neutral-500'>
        {product.type}
        <div>
          <span className='peer inline-block'>
            <Icon name='info' className={"cursor-pointer w-[15px] h-[15px]"} />
          </span>
          <div className='opacity-0 peer-hover:opacity-100 absolute z-10 left-0 duration-200 backdrop-blur-md peer-hover:delay-300 invisible peer-hover:visible text-gray-100 bg-stone-900/60 p-2 rounded-sm font-light'>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};
