import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Context } from "@context";
import { Button, Modal, Form } from "@reusable-components";
import Search from "./Search";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [state] = useContext(Context);

  // close modal after product creation
  useEffect(() => {
    setShowModal(false);
  }, [state]);

  return (
    <header className='flex justify-between items-center mb-6 border-b pb-1.5'>
      <Button onClick={() => setShowModal(true)} className='mr-3'>
        Create
      </Button>
      <Search />

      <AnimatePresence>
        {showModal && (
          <Modal handleOnClose={() => setShowModal(false)}>
            <Form />
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
};
