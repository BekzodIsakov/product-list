import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { Icon } from "@reusable-components/Icon";

export const Modal = ({ children, handleOnClose }) => {
  const ModalContent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full h-full bg-black/70 fixed top-0 flex items-center justify-center`}
      onClick={handleOnClose}
    >
      <motion.div
        initial={{ transform: "scale(0.8)" }}
        animate={{ transform: "scale(1)" }}
        className={` bg-white rounded-md shadow-xl relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleOnClose}
          className='absolute top-2 right-2 bg-gray-200 p-1.5 rounded-sm'
        >
          <Icon name='x' />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
  return createPortal(<ModalContent />, document.body);
};
