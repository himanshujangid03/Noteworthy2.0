import styled from "styled-components";
import SearchInput from "../../ui/SearchInput";
import UserProfile from "../User account/UserProfile";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

function Header() {
  return (
    <StyledHeader className=" rounded-b-2xl grid grid-flow-col place-content-centergrid-cols-2 my-4">
      <SearchInput />
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
