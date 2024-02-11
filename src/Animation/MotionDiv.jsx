import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  fadeInY: {
    opacity: 1,
    y: 0,
  },
};

function MotionDiv({ children, className }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="fadeInY"
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
