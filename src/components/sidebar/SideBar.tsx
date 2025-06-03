import "./sidebar.css";
import ToggleButton from "../../components/togglebutton/ToggleButton.tsx";
import Links from "../../components/links/Links.tsx";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 100% 40px)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 25,
    },
  },
  closed: {
    clipPath: "circle(20px at 91% 30px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton isOpen={isOpen} setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
