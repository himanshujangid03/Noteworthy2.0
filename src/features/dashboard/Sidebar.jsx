import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { BsActivity } from "react-icons/bs";
import { LuUserCog } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";
import { IoMdFolderOpen } from "react-icons/io";

import Logo from "../../ui/Logo";
import ListItem from "../../ui/ListItem";

const StyledSidebar = styled.div`
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar className=" ml-1 grid grid-flow-col ">
      <div>
        <Logo />
        <ul className="menu h-[80%] rounded-none mt-10">
          <ListItem to={""} datatip="Dashboard">
            <RxDashboard className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/folder"} datatip="File Manager">
            <IoMdFolderOpen className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/activity"} datatip="Activity">
            <BsActivity className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/user"} datatip="Account settings">
            <LuUserCog className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/settings"} datatip="Settings">
            <IoSettingsOutline className=" h-6 w-6 " />
          </ListItem>
          <div className=" w-[50%] mb-6 mx-4 mt-4 rounded-full h-1 bg-indigo-200"></div>
          <ListItem to={"/tasks"} datatip="Task">
            <GoTasklist className=" h-6 w-6" />
          </ListItem>
        </ul>
      </div>
      <div className=" divider divider-vertical"></div>
    </StyledSidebar>
  );
}

export default Sidebar;
