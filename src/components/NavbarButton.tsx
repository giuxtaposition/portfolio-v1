import React from "react";
import { FiFileText, FiHome, FiPackage, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  linkPath: string;
}

const NavbarButton: React.FC<Props> = ({ name, linkPath }) => {
  return (
    <>
      <li className="NavbarButton">
        <Link to={linkPath}>
          {name === "home" ? (
            <FiHome />
          ) : name === "about" ? (
            <FiUser />
          ) : name === "projects" ? (
            <FiPackage />
          ) : name === "resume" ? (
            <FiFileText />
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
