import React, { useContext } from "react";
import { Context } from "../context/Provider";
import { Button } from "./Button";
import { Card } from "./Card";

export const ProductList = () => {
  const [state] = useContext(Context);
  console.log({ state });
  return (
    <div className='my-2'>
      <div className='flex justify-between items-center mb-1'>
        <h2 className='text-xl mb-2'>Product list</h2>
        <div>
          Filter by category: <input type='select' />
        </div>
      </div>
      <ul className='grid grid-cols-auto-fit gap-x-6 gap-y-4 mb-5'>
        {state?.products &&
          state.products.map((product) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))}
      </ul>
      <div className='border-t'>
        <Button>Create</Button>
      </div>
    </div>
  );
};
