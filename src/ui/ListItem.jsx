import { NavLink } from "react-router-dom";

function ListItem({ to, children, datatip }) {
  return (
    <li
      className=" m-1 text-gray-600 tooltip tooltip-right tooltip-neutral font-sans font-semibold "
      data-tip={datatip}
    >
      <NavLink
        to={to}
        className={
          " hover:bg-indigo-300 hover:text-gray-800 active:!bg-indigo-950 rounded-xl  "
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;
