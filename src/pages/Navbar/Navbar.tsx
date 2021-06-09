import React, { useState } from "react";
import NavbarButtons from "./NavbarButtons";
import NavbarHamburger from "./NavbarHamburger";
import "../../styles/Navbar.scss";

interface Props {
  navbarRef: React.MutableRefObject<null>;
  status: string;
}

const Navbar: React.FC<Props> = ({ navbarRef, status }) => {
  // STATES
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
