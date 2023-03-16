import React from "react";
import { Icon } from "./Icon";

export const Card = ({ product }) => {
  return (
    <div className='text-sm'>
      <div className='mb-2 relative'>
        <div className='absolute w-full'>
          <div className='flex justify-end gap-x-1 p-1'>
            <button
              className='p-1 bg-slate-900/50 text-white rounded-sm'
              title='edit'
            >
              <Icon name='pencil' />
            </button>
            <button
              className='p-1 bg-slate-900/50 text-white rounded-sm'
              title='delete'
            >
              <Icon name='trash-can' />
            </button>
          </div>
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
          <div className='opacity-0 peer-hover:opacity-100 absolute z-10 left-0 duration-200 backdrop-blur-md peer-hover:delay-300 invisible peer-hover:visible text-gray-200 bg-stone-900/60 p-2 rounded-sm font-light'>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};
