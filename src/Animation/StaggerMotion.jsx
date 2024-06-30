import { motion as m } from "framer-motion";

function StaggerMotion({ children, i, className }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <m.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, delay: i * 0.08 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default StaggerMotion;
