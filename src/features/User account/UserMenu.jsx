import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div>
      <ul className="menu bg-slate-200 rounded-2xl px-3 py-6 w-56">
        <li className="my-1 ">
          <NavLink to={"profile"} className={" pr-2 text-lg"}>
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
