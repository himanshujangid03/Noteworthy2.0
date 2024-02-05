import { Outlet } from "react-router";
import Header from "../features/dashboard/Header";
import styled from "styled-components";
import Sidebar from "../features/dashboard/Sidebar";
import WelcomePage from "../features/authentication/WelcomePage";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  margin: 0;
`;

const StyledMain = styled.main`
  padding: 1.5rem 2rem;
`;

function AppLayout() {
  const { data, isLoading } = useIsLoggedIn();

  if (!data || isLoading) return <WelcomePage />;

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <StyledMain className=" bg-gray-100">
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
