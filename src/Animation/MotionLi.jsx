import { motion } from "framer-motion";

const liVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function MotionLi({ children, className }) {
  return (
    <motion.li variants={liVariants} className={className}>
      {children}
    </motion.li>
  );
}

export default MotionLi;
