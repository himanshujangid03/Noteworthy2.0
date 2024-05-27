import { Outlet } from "react-router";
import Header from "../features/dashboard/Header";
import styled from "styled-components";
import Sidebar from "../features/dashboard/Sidebar";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import Welcome from "../pages/Welcome";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100dvh;
  width: 100dvw;
  margin: 0;
`;

function AppLayout() {
  const { data } = useIsLoggedIn();

  if (!data) return <Welcome />;
  return (
    <>
      <StyledAppLayout className=" bg-base-100 overflow-hidden ">
        <Sidebar />
        <div className="">
          <Header />
          <main className=" overflow-x-hidden overflow-y-scroll p-4 h-full">
            <Outlet />
          </main>
        </div>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
