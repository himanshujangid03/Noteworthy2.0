import { CiGrid41 } from "react-icons/ci";
import { CiWavePulse1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import Logo from "../../ui/Logo";
import ListItem from "../../ui/ListItem";
import MotionUl from "../../Animation/MotionUl";
import { CiBoxList } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="h-fit z-50 lg:z-auto lg:pl-2 bottom-0 w-full place-self-center lg:m-0 lg:h-full lg:w-full absolute lg:static bg-gray-50 lg:bg-base-100 border-gray-300 ring-2 ring-gray-300 shadow-xl lg:shadow-none lg:ring-0 lg:rounded-none">
      <div>
        <Logo />
        <MotionUl className="menu menu-horizontal gap-2 grid grid-flow-col lg:menu-vertical lg:mt-10 lg:gap-4">
          <ListItem to={"/"} datatip="Dashboard">
            <CiGrid41 className=" lg:size-7 size-7 " />
          </ListItem>
          <ListItem to={"/folder"} datatip="File Manager">
            <CiFolderOn className=" lg:size-7 size-6 " />
          </ListItem>
          <ListItem to={"/activity"} datatip="Activity">
            <CiWavePulse1 className=" lg:size-7 size-6 " />
          </ListItem>
          <ListItem to={"/user"} datatip="Account settings">
            <CiUser className=" lg:size-7 size-6 " />
          </ListItem>
          <ListItem to={"/tasks"} datatip="Task">
            <CiBoxList className=" lg:size-7 size-6" />
          </ListItem>
        </MotionUl>
      </div>
    </div>
  );
}

export default Sidebar;
