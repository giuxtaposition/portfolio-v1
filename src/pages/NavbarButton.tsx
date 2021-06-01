import React from "react";
import { FiMail, FiHome, FiPackage, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  linkPath: string;
}

const NavbarButton: React.FC<Props> = ({ name, linkPath }) => {
  return (
    <>
      <li className="NavbarButton" id={`${name}-navbar`}>
        <Link to={linkPath}>
          {name === "home" ? (
            <FiHome />
          ) : name === "about" ? (
            <FiUser />
          ) : name === "projects" ? (
            <FiPackage />
          ) : name === "contact" ? (
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
