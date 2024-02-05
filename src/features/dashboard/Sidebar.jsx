import styled from "styled-components";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";
import { PiStackBold } from "react-icons/pi";

import Logo from "../../ui/Logo";
import ListItem from "../../ui/ListItem";

const StyledSidebar = styled.div`
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar className=" bg-indigo-100 m-0 ">
      <div>
        <Logo />
        <ul className="menu h-[80%] rounded-none mt-10">
          <ListItem to={""} datatip="Dashboard">
            <BiHomeSmile className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/folder"} datatip="File Manager">
            <MdOutlineEventNote className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/activity"} datatip="Activity">
            <FiActivity className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/user"} datatip="Account settings">
            <MdManageAccounts className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/settings"} datatip="Settings">
            <LuSettings className=" h-6 w-6 " />
          </ListItem>
          <div className=" w-[50%] mb-6 mx-4 mt-4 rounded-full h-1 bg-indigo-200"></div>
          <ListItem to={"/tasks"} datatip="Task">
            <PiStackBold className=" h-6 w-6" />
          </ListItem>
        </ul>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
