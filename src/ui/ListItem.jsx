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
          " hover:bg-primary hover:text-gray-50 active:!bg-primary rounded-xl  "
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;
