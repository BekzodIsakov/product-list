import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { Icon } from "@reusable-components/Icon";

export const Modal = ({ children, handleOnClose }) => {
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    const modalElement = modalRef.current;
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    function handleEscapeKeyPress(e) {
      if (e.key === "Escape") {
        handleOnClose();
      }
    }

    function handleTabKeyPress(e) {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }

    modalElement.focus();
    modalElement.addEventListener("keydown", handleEscapeKeyPress);
    modalElement.addEventListener("keydown", handleTabKeyPress);

    return () => {
      document.body.style.overflow = "unset";
      modalElement.removeEventListener("keydown", handleEscapeKeyPress);
      modalElement.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [handleOnClose]);

  const ModalContent = () => (
    <motion.div
      ref={modalRef}
      tabIndex='-1'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full h-full bg-black/70 fixed top-0 flex items-center justify-center`}
      onClick={handleOnClose}
    >
      <motion.div
        initial={{ transform: "scale(0.8)" }}
        animate={{ transform: "scale(1)" }}
        className={`bg-white rounded-md shadow-xl relative max-h-[95vh] overflow-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button
            onClick={handleOnClose}
            className='absolute top-2 right-2 bg-gray-200 p-1.5 rounded-sm'
          >
            <Icon name='x' />
          </button>
          <div>{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
  return createPortal(<ModalContent />, document.body);
};
