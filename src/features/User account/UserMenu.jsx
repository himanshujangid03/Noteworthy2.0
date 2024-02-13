import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <NavLink to={"/user"} role="tab" className="tab">
        Tab 1
      </NavLink>
      <NavLink
        to={"/user/change-password"}
        role="tab"
        className="tab tab-active"
      >
        Tab 2
      </NavLink>
      <NavLink to={"/user/delete-account"} role="tab" className="tab">
        Tab 3
      </NavLink>
    </div>
  );
}

export default UserMenu;
