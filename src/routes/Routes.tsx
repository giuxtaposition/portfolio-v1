import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import About from "../pages/Homepage/About";
import Projects from "../pages/Homepage/Projects";
import Contact from "../pages/Homepage/Contact";
import Footer from "../pages/Footer";

interface Props {
  navbarRef: React.MutableRefObject<null>;
  homeRef: React.MutableRefObject<null>;
  aboutRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
  navbarStatus: string;
}

const AppContainer: React.FC<Props> = ({
  navbarRef,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  navbarStatus,
}) => {
  return (
    <>
      <Home
        navbarRef={navbarRef}
        homeRef={homeRef}
        navbarStatus={navbarStatus}
      />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

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
  // Change pathname on scroll
  function pathnameChange() {
    if (visibleSection === "Home") {
      if (location.pathname !== "/") {
        history.replace((location.pathname = "/"));
      }
    } else if (visibleSection === "About") {
      if (location.pathname !== "/about") {
        history.replace((location.pathname = "/about"));
      }
    } else if (visibleSection === "Projects") {
      if (location.pathname !== "/projects") {
        history.replace((location.pathname = "/projects"));
      }
      console.log("adding active class");
    } else if (visibleSection === "Contact") {
      if (location.pathname !== "/contact") {
        history.replace((location.pathname = "/contact"));
      }
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
    checkVisibleSection();
    pathnameChange();
    navbarScrollStatus();
    window.addEventListener("scroll", checkVisibleSection);
    return () => {
      window.removeEventListener("scroll", checkVisibleSection);
    };
  }, [visibleSection]);

  // Scroll to correct section at page refresh on specific url
  useEffect(() => {
    let elementId = location.pathname;
    elementId =
      elementId.charAt(1).toUpperCase() +
      elementId.substring(2, elementId.length);
    document.getElementById(elementId)?.scrollIntoView();
  }, []);

  return (
    <>
      <Route exact path="/">
        <AppContainer
          navbarRef={navbarRef}
          homeRef={homeRef}
          navbarStatus={status}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </Route>
      <Route path="/about">
        <AppContainer
          navbarRef={navbarRef}
          homeRef={homeRef}
          navbarStatus={status}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </Route>
      <Route path="/projects">
        <AppContainer
          navbarRef={navbarRef}
          homeRef={homeRef}
          navbarStatus={status}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </Route>
      <Route path="/contact">
        <AppContainer
          navbarRef={navbarRef}
          homeRef={homeRef}
          navbarStatus={status}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </Route>
    </>
  );
};
export default Routes;
