import { AnimatePresence } from "framer-motion";

import { ProductList } from "./components";
import { Header } from "./components/Header";
import { SpinnerModal } from "./reusable-components/SpinnerModal";

function App() {
  return (
    <div className='font-lato'>
      <AnimatePresence>
        <SpinnerModal />
      </AnimatePresence>
      <div className='max-w-5xl mx-auto my-4 px-4'>
        <Header />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
