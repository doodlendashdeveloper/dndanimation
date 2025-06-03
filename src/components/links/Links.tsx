import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

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
  const items = ["Home", "About", "Work", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div key={item} variants={itemVariants}>
          <ScrollLink
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              // scroll.scrollToTop(); // optional
            }}
          >
            {item}
          </ScrollLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
