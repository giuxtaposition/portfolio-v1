import React, { useEffect, useState } from "react";
import NavbarButtons from "./NavbarButtons";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);
  const [status, setStatus] = useState<"top" | "scrolled">("top");

  function listener() {
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
    <div className={`Navbar ${status === "top" ? "" : "scrolled-navbar"}`}>
      <div className="title">GY.</div>

      <NavbarButtons />
    </div>
  );
};

export default Navbar;
