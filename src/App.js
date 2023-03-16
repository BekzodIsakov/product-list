import { useContext, useEffect } from "react";
import { ProductList } from "./components";
import { Button } from "./components/Button";
import { Context } from "./context/Provider";

function App() {
  console.log("running");
  const [_, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchProducts();
  }, []);

  return (
    <div className='font-lato'>
      <div className='max-w-5xl mx-auto my-4 px-4'>
        <header className='flex justify-end items-center mb-6 border-b pb-1.5'>
          <div>
            <label htmlFor='search'>Search</label>
            <input type='text' />
          </div>
        </header>

        <ProductList />
      </div>
    </div>
  );
}

export default App;
