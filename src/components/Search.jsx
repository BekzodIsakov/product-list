import { Button, Spinner } from "@reusable-components";
import React, { useContext } from "react";
import { Context } from "@context";

const Search = () => {
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [state, actions] = useContext(Context);

  const inputRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    actions.search(name);
  }

  function clearInput(e) {
    setName("");
    actions.clearSearch();
    inputRef.current.focus();
  }

  return (
    <div className='relative'>
      <form class='flex items-center gap-1' onSubmit={handleSubmit}>
        <label htmlFor='voice-search' class='sr-only'>
          Search
        </label>
        <div class='relative w-full'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none'>
            <svg
              class='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
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
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search...'
            required
          />
          <div className='absolute inset-y-0 right-0 mr-2 flex items-center'>
            {!isLoading ? (
              <Spinner />
            ) : (
              <button onClick={clearInput} type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-4 h-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <Button
          type='submit'
          class='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Search
        </Button>
      </form>
      <div className='absolute z-10 shadow-lg bg-gray-50 top-[110%] rounded-sm w-full'>
        <ul>
          {state.foundProducts.map((item) => (
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
