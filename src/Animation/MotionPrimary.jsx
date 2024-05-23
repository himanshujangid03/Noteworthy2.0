import { motion } from "framer-motion";

function MotionPrimary({ children, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionPrimary;
