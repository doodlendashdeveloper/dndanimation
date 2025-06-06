import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./links.css";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};

const Links = () => {
  const items = [
    {
      heading: "Home",
      href: "/",
    },
    {
      heading: "About",
      href: "/about",
    },
    {
      heading: "Work",
      href: "/work",
    },
    {
      heading: "Portfolio",
      href: "/portfolio",
    },
    {
      heading: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div key={item} variants={itemVariants}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              `mob-menu-link ${isActive ? "active" : ""}`
            }
          >
            {item.heading}
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
