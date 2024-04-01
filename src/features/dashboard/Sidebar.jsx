import styled from "styled-components";
import { CiGrid41 } from "react-icons/ci";
import { CiWavePulse1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import Logo from "../../ui/Logo";
import ListItem from "../../ui/ListItem";
import MotionUl from "../../Animation/MotionUl";
import { CiBoxList } from "react-icons/ci";

const StyledSidebar = styled.div`
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar className=" grid grid-flow-col">
      <div>
        <Logo />
        <MotionUl className="menu rounded-none mt-10 gap-2">
          <ListItem to={"/"} datatip="Dashboard">
            <CiGrid41 className=" h-7 w-7 " />
          </ListItem>
          <ListItem to={"/folder"} datatip="File Manager">
            <CiFolderOn className=" h-7 w-7 " />
          </ListItem>
          <ListItem to={"/activity"} datatip="Activity">
            <CiWavePulse1 className=" h-7 w-7 " />
          </ListItem>
          <ListItem to={"/user"} datatip="Account settings">
            <CiUser className=" h-7 w-7 " />
          </ListItem>
          <ListItem to={"/tasks"} datatip="Task">
            <CiBoxList className=" h-7 w-7" />
          </ListItem>
        </MotionUl>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
