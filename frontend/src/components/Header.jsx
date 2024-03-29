import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useProductContext } from "@context";
import { Button, Modal, Form } from "@reusable-components";
import Search from "./Search";

export const Header = ({ itemsPerPage }) => {
  const [showModal, setShowModal] = useState(false);

  const [state] = useProductContext();

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
            <Form itemsPerPage={itemsPerPage} />
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
};
