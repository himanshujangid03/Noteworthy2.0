import { motion } from "framer-motion";

const ulVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

function MotionUl({ children, className }) {
  return (
    <motion.ul
      layout="position"
      variants={ulVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export default MotionUl;
