import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const closeModal: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="Modal" ref={modalRef} onClick={closeModal}>
          <div className="modalContainer">{children}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
