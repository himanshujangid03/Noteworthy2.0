import { motion as m } from "framer-motion";

function StaggerMotion({ children, i, className }) {
  return (
    <m.div
      layout
      drag
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default StaggerMotion;
