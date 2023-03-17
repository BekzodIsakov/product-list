import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Context } from "../context/Provider";
import { Button, Modal, Form } from "../reusable-components";

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
        <label htmlFor='search'>Search</label>
        <input type='text' />
      </div>
    </header>
  );
};
