import AvatarComponent from "./AvatarComponent";
import DeleteMyAccount from "./DeleteMyAccount";
import UserInfo from "./UserInfo";

function UserComponent() {
  return (
    <div className=" lg:px-20 pb-20 p-4 overflow-y-scroll">
      <AvatarComponent />
      <div className="divider max-w-[90%] lg:max-w-full"></div>
      <UserInfo />
      <div className="divider"></div>
      <DeleteMyAccount />
    </div>
  );
}

export default UserComponent;
