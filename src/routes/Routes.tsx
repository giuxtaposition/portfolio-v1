import React, { useEffect, useRef, useState } from "react";
import { HashRouter, useHistory, useLocation } from "react-router-dom";
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
  const [visibleSection, setVisibleSection] = useState<string | undefined>("");

  let history = useHistory();
  let location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(navbarRef.current!);
      const scrollPosition = window.scrollY + headerHeight;

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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    history.replace((location.hash = "/"));
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter>
      <Home
        navbarRef={navbarRef}
        homeRef={homeRef}
        visibleSection={visibleSection}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </HashRouter>
  );
};
export default Routes;
