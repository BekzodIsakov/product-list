import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { useProductContext } from "../context";
import { Card } from "../reusable-components";

export const ProductList = () => {
  const [state, actions] = useProductContext();

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

  const ITEMS_PER_PAGE = 8;
  const pageCount = Math.ceil(state.totalCount / ITEMS_PER_PAGE);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  useEffect(() => {
    actions.fetch(currentPage, ITEMS_PER_PAGE, filterBy);
  }, [filterBy, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterBy]);

  return (
    <div className='my-2'>
      <div className='flex justify-between items-center mb-1'>
        <h2 className='text-xl mb-2'>Product list</h2>
        <div>
          <label
            htmlFor='categories'
            className='mr-2 text-sm font-semibold text-indigo-500 cursor-pointer'
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
              All
            </option>
            <option value='shoes'>Shoes</option>
            <option value='dress'>Dress</option>
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
        forcePage={currentPage - 1}
        breakLabel='...'
        previousLabel='<'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName='flex justify-center gap-x-2 mt-12 mb-10 text-gray-400 '
        pageClassName='rounded'
        pageLinkClassName='px-2.5 py-1 rounded'
        previousLinkClassName='px-3 py-1 rounded select-none'
        nextLinkClassName='px-3 py-1 rounded select-none'
        activeLinkClassName='bg-indigo-400 text-white'
        disabledLinkClassName='cursor-default text-gray-300'
      />
    </div>
  );
};
