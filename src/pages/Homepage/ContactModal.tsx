import React, { ReactChild } from "react";

interface Props {
  title: string;
  text: string;
  icon: ReactChild;
  id: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal: React.FC<Props> = ({
  title,
  icon,
  text,
  id,
  setShowModal,
}) => {
  return (
    <div className="ContactModal" id={id}>
      <div className="contact-icon">{icon}</div>
      <h1>{title}</h1>
      <p>{text}</p>
      <button onClick={() => setShowModal(false)}>Close</button>
    </div>
  );
};
export default ContactModal;
