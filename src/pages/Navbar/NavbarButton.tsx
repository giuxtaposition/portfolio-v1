import React from "react";
import { FiMail, FiHome, FiPackage, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  linkPath: string;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarButton: React.FC<Props> = ({
  name,
  linkPath,
  setShowMobileMenu,
}) => {
  const scrollTo = (name: string) => {
    let element = document.getElementById(name);
    element!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleClick = (scrollName: string) => {
    scrollTo(scrollName);
    setShowMobileMenu(false);
  };

  return (
    <>
      <li
        className="NavbarButton"
        id={`${name}-navbar`}
        onClick={() => handleClick(name)}
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
