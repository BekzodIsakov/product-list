import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Context } from "@context";
import { Button, Modal, Form } from "@reusable-components";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [state] = useContext(Context);

  // close modal after product creation
  useEffect(() => {
    setShowModal(false);
  }, [state]);

  return (
    <header className='flex justify-between items-center mb-6 border-b pb-1.5'>
      <Button onClick={() => setShowModal(true)}>Create</Button>
      <AnimatePresence>
        {showModal && (
          <Modal handleOnClose={() => setShowModal(false)}>
            <Form />
          </Modal>
        )}
      </AnimatePresence>
      <div>
        <label
          htmlFor='categories'
          className='mr-2 text-sm font-semibold text-indigo-300 cursor-pointer'
        >
          Search:
        </label>
        <input
          type='text'
          className='bg-gray-100 rounded p-1 text-sm text-gray-800 w-48'
        />
      </div>
    </header>
  );
};
