import { motion as m } from "framer-motion";

function StaggerMotion({ children, i, className }) {
  return (
    <m.div
      layout
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default StaggerMotion;
