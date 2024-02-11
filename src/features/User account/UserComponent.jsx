//import DeleteMyAccount from "./DeleteMyAccount";
//import UserInfo from "./UserInfo";

import { Outlet } from "react-router";
import UserMenu from "./UserMenu";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
`;

function UserComponent() {
  return (
    <StyledDiv className=" grid grid-flow-col gap-4 h-[35rem] rounded-3xl bg-stone-200">
      <UserMenu />
      <div className=" h-80 rounded-full self-center w-1 bg-stone-300"></div>
      <div>
        <Outlet />
      </div>
    </StyledDiv>
  );
}

export default UserComponent;
