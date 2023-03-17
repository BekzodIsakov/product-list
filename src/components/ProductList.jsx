import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { Context } from "../context/Provider";
import { Card } from "../reusable-components/Card";

export const ProductList = () => {
  const [state, actions] = useContext(Context);

  const [filterBy, setFilterBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let productItems = [];

  if (state?.products) {
    if (filterBy) {
      productItems = state.products.filter(
        (product) => product.category === filterBy
      );
    } else {
      productItems = [...state.products];
    }
  }

  // console.log({ productItems });

  const ITEMS_PER_PAGE = 2;
  // const endOffset = itemOffset + ITEMS_PER_PAGE;
  // const currentItems = productItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.totalCount / ITEMS_PER_PAGE);
  // console.log(productItems);

  const handlePageClick = (e) => {
    // console.log({ selected: e.selected });
    // const newOffset = (e.selected * ITEMS_PER_PAGE) % state.totalCount;
    setCurrentPage(e.selected + 1);

    // setItemOffset(newOffset);
  };

  useEffect(() => {
    actions.fetchProducts(currentPage, ITEMS_PER_PAGE, filterBy);
  }, [filterBy, currentPage]);

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
        {productItems.map((item) => (
          <li key={item.id}>
            <Card product={item} />
          </li>
        ))}
      </ul>

      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        containerClassName='flex justify-center mt-14 text-gray-400'
        pageClassName='rounded'
        pageLinkClassName='px-2.5 py-1 rounded'
        previousLinkClassName='px-2.5 py-1 rounded select-none'
        nextLinkClassName='px-2.5 py-1 rounded select-none'
        activeLinkClassName='bg-indigo-400 text-white'
        disabledLinkClassName='cursor-default text-gray-300'
      />
    </div>
  );
};
