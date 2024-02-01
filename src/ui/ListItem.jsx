import { NavLink } from "react-router-dom";

function ListItem({ to, children }) {
  return (
    <li className=" m-1 active ">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default ListItem;
