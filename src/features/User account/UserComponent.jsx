import AvatarComponent from "./AvatarComponent";
import DeleteMyAccount from "./DeleteMyAccount";
import UserInfo from "./UserInfo";

function UserComponent() {
  return (
    <div className=" px-20">
      <AvatarComponent />
      <div className="divider"></div>
      <UserInfo />
      <div className="divider"></div>
      <DeleteMyAccount />
    </div>
  );
}

export default UserComponent;
