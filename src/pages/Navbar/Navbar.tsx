import React, { useEffect, useState } from "react";
import NavbarButtons from "./NavbarButtons";
import NavbarHamburger from "./NavbarHamburger";
import "../../styles/Navbar.scss";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  navbarRef: React.MutableRefObject<null>;
  visibleSection: string | undefined;
}

const Navbar: React.FC<Props> = ({ navbarRef, visibleSection }) => {
  // STATES
  const [scrolled, setScrolled] = useState(0);
  const [status, setStatus] = useState<"top" | "scrolled">("top");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  let history = useHistory();
  let location = useLocation();

  //FUNCTIONS
  function removeActiveClass() {
    let navbarButtons = document.getElementsByClassName("NavbarButton");
    for (let index in navbarButtons) {
      if (navbarButtons.hasOwnProperty(index)) {
        navbarButtons[index].classList.remove("active");
      }
    }
  }

  function listener() {
    // Change Hash on scroll
    if (visibleSection === "Home") {
      if (location.hash !== "/") {
        history.replace((location.hash = "/"));
        removeActiveClass();
      }
      document.getElementById("Home-navbar")?.classList.add("active");
    } else if (visibleSection === "About") {
      if (location.hash !== "/about") {
        history.replace((location.hash = "/about"));
        removeActiveClass();
      }
      document.getElementById("About-navbar")?.classList.add("active");
    } else if (visibleSection === "Projects") {
      if (location.hash !== "/projects") {
        history.replace((location.hash = "/projects"));
        removeActiveClass();
      }
      document.getElementById("Projects-navbar")?.classList.add("active");
    } else if (visibleSection === "Contact") {
      if (location.hash !== "/contact") {
        history.replace((location.hash = "/contact"));
        removeActiveClass();
      }
      document.getElementById("Contact-navbar")?.classList.add("active");
    }

    // Change navbar color on scroll
    setScrolled(window.pageYOffset);
    if (scrolled >= 120) {
      if (status !== "scrolled") {
        setStatus("scrolled");
      }
    } else {
      if (status !== "top") {
        setStatus("top");
      }
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", listener);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div
      className={`Navbar ${status === "top" ? "" : "scrolled-navbar"}`}
      ref={navbarRef}
    >
      <div className="title">GY.</div>
      <NavbarButtons
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <NavbarHamburger
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </div>
  );
};

export default Navbar;
