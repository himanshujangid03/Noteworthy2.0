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
    <StyledSidebar className=" bg-base-200 w-60 ">
      <Logo />
      <ul className="menu  rounded-none mt-10">
        <ListItem to={""}>
          <BiHomeSmile className=" h-6 w-6 " />
          <p className=" text-md font-semibold">Dashboard</p>
        </ListItem>
        <ListItem to={"/folder"}>
          <MdOutlineEventNote className=" h-6 w-6 " />
          <p className=" text-md font-semibold">File Manager</p>
        </ListItem>
        <ListItem to={"/activity"}>
          <FiActivity className=" h-6 w-6 " />
          <p className=" text-md font-semibold">Activity</p>
        </ListItem>
        <ListItem to={"/user"}>
          <MdManageAccounts className=" h-6 w-6 " />
          <p className=" text-md font-semibold">User account</p>
        </ListItem>
        <ListItem to={"/settings"}>
          <LuSettings className=" h-6 w-6 " />
          <p className=" text-md font-semibold">Settings</p>
        </ListItem>
      </ul>
    </StyledSidebar>
  );
}

export default Sidebar;
