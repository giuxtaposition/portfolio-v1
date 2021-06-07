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
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const Routes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (element: HTMLElement) => {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    };

    if (location.pathname === "/") {
      const element = document.getElementById("Home");
      handleScroll(element!);
      document.getElementById("home-navbar")?.classList.add("active");
    } else if (location.pathname === "/about") {
      const element = document.getElementById("About");
      handleScroll(element!);
      document.getElementById("about-navbar")?.classList.add("active");
    } else if (location.pathname === "/projects") {
      const element = document.getElementById("Projects");
      handleScroll(element!);
      document.getElementById("projects-navbar")?.classList.add("active");
    } else if (location.pathname === "/contact") {
      const element = document.getElementById("Contact");
      handleScroll(element!);
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
