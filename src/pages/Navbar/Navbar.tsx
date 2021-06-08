import React, { useEffect, useState } from "react";
import NavbarButtons from "./NavbarButtons";
import NavbarHamburger from "./NavbarHamburger";
import "../../styles/Navbar.scss";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  navbarRef: React.MutableRefObject<null>;
  visibleSection: string | undefined;
  status: string;
}

const Navbar: React.FC<Props> = ({ navbarRef, visibleSection, status }) => {
  // STATES

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  let history = useHistory();
  let location = useLocation();

  //FUNCTIONS

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
