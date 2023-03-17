import React, { useContext, useState } from "react";
import { Context } from "../context/Provider";
import { Card } from "../reusable-components/Card";

export const ProductList = () => {
  const [state] = useContext(Context);
  const [filterBy, setFilterBy] = useState("");

  let productItems = [];

  if (state?.products) {
    if (filterBy) {
      state.products.forEach((product) => {
        if (product.category === filterBy) {
          productItems.push(
            <li key={product.id}>
              <Card product={product} />
            </li>
          );
        }
      });
    } else {
      productItems = state.products.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ));
    }
  }

  return (
    <div className='my-2'>
      <div className='flex justify-between items-center mb-1'>
        <h2 className='text-xl mb-2'>Product list</h2>
        <div>
          <label
            htmlFor='categories'
            className='text-sm font-semibold text-indigo-300 mr-2'
          >
            Filter by category:
          </label>

          <select
            name='categories'
            id='categories'
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option className='text-lg' value=''>
              None
            </option>
            <option value='shoes'>shoes</option>
            <option value='dress'>dress</option>
          </select>
        </div>
      </div>
      <ul className='grid grid-cols-auto-fit gap-x-6 gap-y-7 mb-5'>
        {productItems}
      </ul>
    </div>
  );
};
