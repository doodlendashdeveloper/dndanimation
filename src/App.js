import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/aboutus/AboutUs.tsx";
import "./App.css";
import PortfolioPage from "./pages/portfolio/Portfoliopage.tsx";
import ScrollToTop from "./components/scrolltotop/ScrollToTop.tsx";
import ContactPage from "./pages/contactpage/ContactPage.tsx";
import Btt from "./components/Btt.tsx";

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
  initial: {
    opacity: 1,
    y: "100lvh",
    x: "-75lvh",
    position: "absolute",
    width: "100%",
  },
  animate: {
    opacity: 1,
    y: "0lvh",
    x: "0lvh",
    transition: {
      duration: 1,
      ease: [0.44, 0.14, 0.28, 1],
    },
  },
  exit: {
    opacity: 1,
    y: "-25lvh",
    x: "25lvh",
    transition: {
      duration: 1,
      ease: [0.44, 0.14, 0.28, 1],
    },
  },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="motion-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = ({ headerRef }) => {
  const location = useLocation();
  return (
    <div className="page-container">
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home headerRef={headerRef} />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutUs headerRef={headerRef} />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <PortfolioPage headerRef={headerRef} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage headerRef={headerRef} />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const headerRef = useRef(null);

  return (
    <Router basename="/">
      <ScrollToTop />
      <Btt headerRef={headerRef} />
      <Navbar />
      <AnimatedRoutes headerRef={headerRef} />
    </Router>
  );
};

export default App;
