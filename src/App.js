import { useContext, useEffect } from "react";
import { ProductList } from "./components";
import { Context } from "./context/Provider";

function App() {
  console.log("running");
  const [_, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchProducts();
  }, []);

  return (
    <div className='font-lato'>
      <main className='max-w-5xl mx-auto my-4 px-4'>
        <div className='flex justify-between'>
          <h2>Product list</h2>
          <div>
            Filter by category: <input type='select' />
          </div>
        </div>

        <ProductList />
      </main>
    </div>
  );
}

export default App;
