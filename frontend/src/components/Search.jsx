import { Button, Spinner } from "../reusable-components";
import React from "react";

const Search = () => {
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);

  const inputRef = React.useRef(null);

  async function searchItems() {
    try {
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
      const url = `${process.env.REACT_APP_BASE_URL}/products?name=${name}`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchItems(name);
  }

  function clearInput(e) {
    setName("");
    setItems([]);
    inputRef.current.focus();
  }

  return (
    <div className='relative'>
      <form className='flex items-center gap-1' onSubmit={handleSubmit}>
        <label htmlFor='voice-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            id='voice-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search...'
            required
          />
          <div className='absolute inset-y-0 right-0 mr-2 flex items-center'>
            {isLoading ? (
              <Spinner />
            ) : name.length > 2 ? (
              <button onClick={clearInput} type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
        <Button type='submit' className='px-2.5'>
          Search
        </Button>
      </form>
      <div className='absolute z-10 shadow-lg bg-gray-50 top-[110%] rounded-sm w-full'>
        <ul>
          {items.map((item) => (
            <li
              className='px-2.5 py-2 text-gray-600 text-sm cursor-pointer hover:bg-gray-100'
              key={item.id}
            >
              {item.name} /{" "}
              <span className='text-gray-500'>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
