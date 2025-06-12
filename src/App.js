import React, { useEffect } from "react";
import {
  HashRouter as Router, // ✅ use HashRouter here
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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="page-container">
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutUs />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <PortfolioPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <Router> {/* ✅ No basename needed with HashRouter */}
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
