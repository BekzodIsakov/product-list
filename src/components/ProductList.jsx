import React, { useContext } from "react";
import { Context } from "../context/Provider";
import { Card } from "./Card";

export const ProductList = () => {
  const [state] = useContext(Context);
  console.log({ state });
  return (
    <div className='my-2'>
      <h2 className='text-xl mb-2'>Product list</h2>
      <ul className='grid grid-cols-auto-fit gap-x-6 gap-y-4'>
        {state?.products &&
          state?.products.map((product) => (
            <li key={product.id}>
              <Card product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
};
