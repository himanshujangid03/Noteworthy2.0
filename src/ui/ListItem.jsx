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
      variants={liVariants}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.3,
      }}
      className=" m-1 text-gray-600 tooltip tooltip-right tooltip-neutral font-sans font-semibold "
      data-tip={datatip}
    >
      <NavLink
        to={to}
        className={
          " hover:bg-primary bg-gray-200 hover:text-gray-50 active:!bg-primary rounded-2xl "
        }
      >
        {children}
      </NavLink>
    </motion.li>
  );
}

export default ListItem;
