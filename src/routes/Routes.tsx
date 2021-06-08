import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import About from "../pages/Homepage/About";
import Projects from "../pages/Homepage/Projects";
import Contact from "../pages/Homepage/Contact";
import Footer from "../pages/Footer";

const getDimensions = (element: HTMLElement) => {
  const { height } = element.getBoundingClientRect();
  const offsetTop = element.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Routes: React.FC = () => {
  // STATES
  const [visibleSection, setVisibleSection] = useState<string | undefined>("");
  const [scrolled, setScrolled] = useState(0);
  const [status, setStatus] = useState<"top" | "scrolled">("top");

  // VARIABLES
  let history = useHistory();
  let location = useLocation();

  // REFS
  const navbarRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: homeRef },
    { section: "About", ref: aboutRef },
    { section: "Projects", ref: projectsRef },
    { section: "Contact", ref: contactRef },
  ];

  //FUNCTIONS
  // Remove "active" class from navbar
  function removeActiveClass() {
    let navbarButtons = document.getElementsByClassName("NavbarButton");
    for (let index in navbarButtons) {
      if (navbarButtons.hasOwnProperty(index)) {
        navbarButtons[index].classList.remove("active");
      }
    }
  }

  // Change Hash on scroll
  function hashChange() {
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
  }

  // Change navbar color on scroll
  function navbarScrollStatus() {
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
    const checkVisibleSection = () => {
      const { height: headerHeight } = getDimensions(navbarRef.current!);
      const scrollPosition = window.scrollY + headerHeight + 10;

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section!);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };
    checkVisibleSection();
    hashChange();
    navbarScrollStatus();
    window.addEventListener("scroll", checkVisibleSection);
    return () => {
      window.removeEventListener("scroll", checkVisibleSection);
    };
  }, [visibleSection]);

  useEffect(() => {
    history.replace((location.hash = "/"));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home
        navbarRef={navbarRef}
        homeRef={homeRef}
        visibleSection={visibleSection}
        navbarStatus={status}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};
export default Routes;
