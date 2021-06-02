import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import About from "../pages/Homepage/About";
import Projects from "../pages/Homepage/Projects";
import Contact from "../pages/Homepage/Contact";
import Footer from "../pages/Footer";

const AppContainer: React.FC = () => {
  return (
    <>
      <div className="scrollsnap-container">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const Routes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementsByClassName("Home")[0].scrollIntoView();
      document.getElementById("home-navbar")?.classList.add("active");
    } else if (location.pathname === "/about") {
      document.getElementsByClassName("About")[0].scrollIntoView();
      document.getElementById("about-navbar")?.classList.add("active");
    } else if (location.pathname === "/projects") {
      document.getElementsByClassName("Projects")[0].scrollIntoView();
      document.getElementById("projects-navbar")?.classList.add("active");
    } else if (location.pathname === "/contact") {
      document.getElementsByClassName("Contact")[0].scrollIntoView();
      document.getElementById("contact-navbar")?.classList.add("active");
    }
  }, [location]);

  return (
    <>
      <Route exact path="/" component={AppContainer} />
      <Route path="/about" component={AppContainer} />
      <Route exact path="/projects" component={AppContainer} />
      <Route path="/contact" component={AppContainer} />
    </>
  );
};
export default Routes;
