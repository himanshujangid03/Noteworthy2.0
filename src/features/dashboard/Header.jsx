import styled from "styled-components";
import SearchInput from "../../ui/SearchInput";
import UserProfile from "../User account/UserProfile";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

function Header() {
  return (
    <StyledHeader className=" bg-gray-50 rounded-b-2xl grid grid-flow-col place-content-center grid-cols-2 h-[5rem]">
      <SearchInput />
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
