import { motion } from "framer-motion";

const ToggleButton = ({ isOpen, setOpen }) => {
  const variants = {
    top: {
      closed: { d: "M 2 2.5 L 20 2.5" },
      open: { d: "M 3 16.5 L 17 2.5" },
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { d: "M 2 16.346 L 20 16.346" },
      open: { d: "M 3 2.5 L 17 16.346" },
    },
  };

  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={{ d: "M 2 2.5 L 20 2.5" }}
          animate={isOpen ? "open" : "closed"}
          variants={variants.top}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={{ opacity: 1 }}
          animate={isOpen ? "open" : "closed"}
          d="M 2 9.423 L 20 9.423"
          variants={variants.middle}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={{ d: "M 2 16.346 L 20 16.346" }}
          animate={isOpen ? "open" : "closed"}
          variants={variants.bottom}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
