import React, { useState } from "react";
import { BiBookmark, BiMailSend, BiMessage, BiUser } from "react-icons/bi";

type formChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: formChangeEvent) => {
    event.preventDefault();
    const { id, value } = event.target;

    const validEmailRegex = RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    switch (id) {
      case "name":
        errors.name =
          value.length < 3 ? "Name must be at least 3 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Please provide a valid email!";
        break;
      case "subject":
        errors.subject =
          value.length < 3 ? "Subject must be at least 3 characters long!" : "";
        break;
      case "message":
        errors.message =
          value.length < 3
            ? "Message must be at least 3 characters long, but please write a little more"
            : "";
        break;
      default:
        break;
    }

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

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  return (
    <section className="Contact">
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
              id="name"
              onChange={handleChange}
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
              id="email"
              onChange={handleChange}
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
              id="subject"
              onChange={handleChange}
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
              id="message"
              onChange={handleChange}
              placeholder="Things you want to say..."
            ></textarea>
            {errors.message.length > 0 && (
              <div className="contact-error">{errors.message}</div>
            )}
          </div>

          <button onClick={(e) => handleSubmit(e)}> Submit </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
