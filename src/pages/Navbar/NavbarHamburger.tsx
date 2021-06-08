import React from "react";

interface Props {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
}

const NavbarHamburger: React.FC<Props> = ({
  showMobileMenu,
  setShowMobileMenu,
}) => {
  const handleClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div
      className={`NavbarHamburger ${showMobileMenu ? "active" : ""}`}
      onClick={() => handleClick()}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default NavbarHamburger;
