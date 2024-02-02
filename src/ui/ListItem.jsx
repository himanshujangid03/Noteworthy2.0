import { NavLink } from "react-router-dom";

function ListItem({ to, children, dataTip }) {
  return (
    <li
      className=" m-1 text-gray-600  tooltip tooltip-right tooltip-neutral font-sans font-semibold "
      data-tip={dataTip}
    >
      <NavLink to={to} className={" hover:bg-indigo-950 hover:text-gray-300 "}>
        {children}
      </NavLink>
    </li>
  );
}

export default ListItem;
