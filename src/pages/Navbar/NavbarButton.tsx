import React, { useEffect } from "react";
import { FiMail, FiHome, FiPackage, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

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
  let location = useLocation();

  //FUNCTIONS
  //Scroll to element
  const scrollTo = (name: string) => {
    let element = document.getElementById(name);
    let navbarHeight =
      document.getElementsByClassName("Navbar")[0].clientHeight;
    let elementPosition = element!.offsetTop;
    let offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Remove "active" class from navbar
  function removeActiveClass() {
    let navbarButtons = document.getElementsByClassName("NavbarButton");
    for (let index in navbarButtons) {
      if (navbarButtons.hasOwnProperty(index)) {
        navbarButtons[index].classList.remove("active");
      }
    }
  }

  const handleClick = (scrollName: string) => {
    removeActiveClass();
    document.getElementById(`${name}-navbar`)?.classList.add("active");

    scrollTo(scrollName);
    setShowMobileMenu(false);
  };
  useEffect(() => {
    removeActiveClass();
    if (location.pathname === "/") {
      document.getElementById("Home-navbar")?.classList.add("active");
    } else if (location.pathname === "/about") {
      document.getElementById("About-navbar")?.classList.add("active");
    } else if (location.pathname === "/projects") {
      document.getElementById("Projects-navbar")?.classList.add("active");
    } else if (location.pathname === "/contact") {
      document.getElementById("Contact-navbar")?.classList.add("active");
    }
  }, [location.pathname]);

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
