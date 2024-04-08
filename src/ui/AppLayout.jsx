import { Outlet } from "react-router";
import Header from "../features/dashboard/Header";
import styled from "styled-components";
import Sidebar from "../features/dashboard/Sidebar";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import Welcome from "../pages/Welcome";

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
  const { data } = useIsLoggedIn();

  if (!data) return <Welcome />;
  return (
    <>
      <StyledAppLayout className=" bg-base-100 ">
        <Header />
        <Sidebar />
        <StyledMain className=" overflow-y-scroll overflow-x-hidden">
          <Outlet />
        </StyledMain>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
