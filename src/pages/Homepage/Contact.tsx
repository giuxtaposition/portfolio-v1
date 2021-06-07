import React, { useState } from "react";
import { BiBookmark, BiMailSend, BiMessage, BiUser } from "react-icons/bi";
import Modal from "../../components/Modal";
import ContactModal from "./ContactModal";
import contactService from "../../services/contactService";
import "../../styles/Contact.scss";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";

const Contact: React.FC = () => {
  //STATES
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  //ERRORS
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  interface Errors {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const countErrors = (errors: Errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (value) => value.length > 0 && (count = count + 1)
    );
    return count;
  };

  const handleFormValidation = () => {
    const validEmailRegex = RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    errors.name =
      name.length < 3 ? "Name must be at least 3 characters long!" : "";

    errors.email = validEmailRegex.test(email)
      ? ""
      : "Please provide a valid email!";

    errors.subject =
      subject.length < 3 ? "Subject must be at least 3 characters long!" : "";

    errors.message =
      message.length < 3
        ? "Message must be at least 3 characters long, but please write a little more"
        : "";

    setErrors({
      name: errors.name,
      email: errors.email,
      subject: errors.subject,
      message: errors.message,
    });

    console.log(
      " name " +
        errors.name +
        " email " +
        errors.email +
        "errors subject" +
        errors.subject +
        " message" +
        errors.message
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleFormValidation();

    if (countErrors(errors) === 0) {
      const emailObject = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      contactService(emailObject).then((returnedResponse) => {
        if (returnedResponse === "success") {
          setShowSuccessModal(true);
        } else {
          setShowErrorModal(true);
        }
      });
    }
  };

  return (
    <section id="Contact">
      <h1 className="title">Contact Me!</h1>
      <form>
        <div className="container">
          <div className="name-contact input-contact">
            <div className="input-title">
              <BiUser />
              <p>Name</p>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoFocus
            />
            {errors.name.length > 0 && (
              <div className="contact-error">{errors.name}</div>
            )}
          </div>

          <div className="email-contact  input-contact">
            <div className="input-title">
              <BiMailSend />
              <p>Email</p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
            />
            {errors.email.length > 0 && (
              <div className="contact-error">{errors.email}</div>
            )}
          </div>

          <div className="subject-contact  input-contact">
            <div className="input-title">
              <BiBookmark />
              <p>Subject</p>
            </div>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              autoFocus
            />
            {errors.subject.length > 0 && (
              <div className="contact-error">{errors.subject}</div>
            )}
          </div>

          <div className="message-contact  input-contact">
            <div className="input-title">
              <BiMessage />
              <p>Message</p>
            </div>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Things you want to say..."
            ></textarea>
            {errors.message.length > 0 && (
              <div className="contact-error">{errors.message}</div>
            )}
          </div>

          <button onClick={(e) => handleSubmit(e)}> Submit </button>
        </div>
      </form>
      <Modal showModal={showSuccessModal} setShowModal={setShowSuccessModal}>
        <ContactModal
          id="success-modal"
          title="Success!"
          text={`Your email was sent successfully. \n I'll try to get back to you as  soon as possible!`}
          icon={<BsCheckCircle />}
          setShowModal={setShowSuccessModal}
        />
      </Modal>

      <Modal showModal={showErrorModal} setShowModal={setShowErrorModal}>
        <ContactModal
          id="error-modal"
          title="Error!"
          text={`Your email was not sent. \n Please try again`}
          icon={<BsExclamationCircle />}
          setShowModal={setShowErrorModal}
        />
      </Modal>
    </section>
  );
};

export default Contact;
