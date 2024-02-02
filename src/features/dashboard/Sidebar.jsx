import styled from "styled-components";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { FiActivity } from "react-icons/fi";

import Logo from "../../ui/Logo";
import ListItem from "../../ui/ListItem";

const StyledSidebar = styled.div`
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar className=" bg-indigo-100 m-4 rounded-2xl ">
      <div>
        <Logo />
        <ul className="menu h-[80%] rounded-none mt-10">
          <ListItem to={""} dataTip="Dashboard">
            <BiHomeSmile className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/folder"} dataTip="File Manager">
            <MdOutlineEventNote className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/activity"} dataTip="Activity">
            <FiActivity className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/user"} dataTip="Account settings">
            <MdManageAccounts className=" h-6 w-6 " />
          </ListItem>
          <ListItem to={"/settings"} dataTip="Settings">
            <LuSettings className=" h-6 w-6 " />
          </ListItem>
        </ul>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
