import React from "react";
import { navbarButtons } from "../../constants";
import NavbarButton from "./NavbarButton";

interface Props {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
}

const NavbarButtons: React.FC<Props> = ({
  showMobileMenu,
  setShowMobileMenu,
}) => {
  return (
    <ul className={`NavbarButtons ${showMobileMenu ? "active" : ""}`}>
      {navbarButtons.map((button) => (
        <NavbarButton
          name={button.name}
          key={button.name}
          linkPath={button.link}
          setShowMobileMenu={setShowMobileMenu}
        />
      ))}
    </ul>
  );
};

export default NavbarButtons;
