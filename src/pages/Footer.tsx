import React from "react";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <section className="Footer">
      <a
        className="copyright"
        href="https://github.com/giuxtaposition/"
        target="_blank"
        rel="noreferrer"
      >
        © Designed and Built by Giuxtaposition (Giulia Ye)
      </a>
    </section>
  );
};

export default Footer;
