import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { useProductContext } from "@context";
import { Spinner } from "@reusable-components";

const SpinnerModalContent = (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`w-full h-full bg-black/20 fixed top-0 left-0 z-10 flex items-center justify-center`}
  >
    <Spinner className='w-[5rem] h-[5rem]' />
  </motion.div>
);

export const SpinnerModal = () => {
  const [state] = useProductContext();
  return state.loading && createPortal(SpinnerModalContent, document.body);
};
