import React from "react";
import { FiMail, FiHome, FiPackage, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  linkPath: string;
}

const NavbarButton: React.FC<Props> = ({ name, linkPath }) => {
  const scrollTo = (name: string) => {
    let element = document.getElementById(name);
    element!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <li
        className="NavbarButton"
        id={`${name}-navbar`}
        onClick={() => scrollTo(name)}
      >
        <Link to={linkPath}>
          {name === "Home" ? (
            <FiHome />
          ) : name === "About" ? (
            <FiUser />
          ) : name === "Projects" ? (
            <FiPackage />
          ) : name === "Contact" ? (
            <FiMail />
          ) : (
            ""
          )}
          {name}
        </Link>
      </li>
    </>
  );
};

export default NavbarButton;
