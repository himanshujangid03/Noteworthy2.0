import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div>
      <ul className="menu mt-6 px-3 py-6 w-56">
        <li className="my-1 ">
          <NavLink to={""} className={" pr-2 text-lg"}>
            Profile
          </NavLink>
        </li>
        <li className="my-1">
          <NavLink to={"change-password"} className={"pr-2 text-lg"}>
            Change password
          </NavLink>
        </li>
        <li className="my-1">
          <NavLink to={"settings"} className={"pr-2 text-lg"}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
