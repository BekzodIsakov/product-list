import { AnimatePresence } from "framer-motion";

import { ProductList, Header } from "@components";
import { SpinnerModal } from "@reusable-components/SpinnerModal";

const ITEMS_PER_PAGE = 8;

function App() {
  return (
    <div className='font-lato'>
      <AnimatePresence>
        <SpinnerModal />
      </AnimatePresence>
      <div className='max-w-5xl mx-auto my-4 px-4'>
        <Header itemsPerPage={ITEMS_PER_PAGE} />
        <ProductList itemsPerPage={ITEMS_PER_PAGE} />
      </div>
    </div>
  );
}

export default App;
