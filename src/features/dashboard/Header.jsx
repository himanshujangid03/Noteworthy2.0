import styled from "styled-components";
import SearchInput from "../../ui/SearchInput";
import UserProfile from "../User account/UserProfile";
import MobileMenu from "@/ui/MobileMenu";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

function Header() {
  return (
    <StyledHeader className="sticky top-0 w-dvw lg:w-full md:w-full z-10 grid grid-flow-col place-content-center grid-cols-[1fr,auto] lg:grid-cols-2 gap-2 p-4 bg-base-100">
      <SearchInput />
      <MobileMenu />
      <UserProfile />
    </StyledHeader>
  );
}

export default Header;
