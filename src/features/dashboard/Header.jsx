import styled from "styled-components";
import SearchInput from "../../ui/SearchInput";
import UserProfile from "../User account/UserProfile";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

function Header() {
  return (
    <StyledHeader className="sticky top-0 z-10 border-b-2 border-gray-300 grid grid-flow-col place-content-centergrid-cols-2 py-4 bg-gray-100">
      <SearchInput />
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
