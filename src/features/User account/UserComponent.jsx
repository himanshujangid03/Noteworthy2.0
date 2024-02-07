//import DeleteMyAccount from "./DeleteMyAccount";
//import UserInfo from "./UserInfo";

import { Outlet } from "react-router";
import UserMenu from "./UserMenu";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

function UserComponent() {
  return (
    <StyledDiv className=" grid grid-flow-col gap-4">
      <UserMenu />
      <div>
        <Outlet />
      </div>
    </StyledDiv>
  );
}

export default UserComponent;
