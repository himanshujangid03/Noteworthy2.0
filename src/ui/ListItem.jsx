import { NavLink } from "react-router-dom";
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

function ListItem({ to, children, datatip }) {
  return (
    <motion.li
      layout="size"
      variants={liVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.2,
        type: "spring",
        damping: 100,
        stiffness: 400,
      }}
      className="text-gray-600 tooltip tooltip-top lg:tooltip-right z-10 tooltip-neutral font-sans font-semibold "
      data-tip={datatip}
    >
      <NavLink
        to={to}
        className={
          " hover:bg-primary bg-base-200/50 ring-1 lg:w-16 ring-gray-300 hover:text-gray-50 active:!bg-primary lg:rounded-2xl rounded-xl flex items-center justify-center"
        }
      >
        {children}
      </NavLink>
    </motion.li>
  );
}

export default ListItem;
