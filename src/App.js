import { useContext, useEffect, useState } from "react";
import { ProductList } from "./components";
import { Header } from "./components/Header";
import { Context } from "./context/Provider";

function App() {
  // const [_, actions] = useContext(Context);

  // useEffect(() => {
  //   actions.fetchProducts();
  // }, []);

  return (
    <div className='font-lato'>
      <div className='max-w-5xl mx-auto my-4 px-4'>
        <Header />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
