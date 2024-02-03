import { Outlet } from "react-router";
import Header from "../features/dashboard/Header";
import styled from "styled-components";
import Sidebar from "../features/dashboard/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { isLoggedIn } from "../services/apiAuth";
import WelcomePage from "./WelcomePage";

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
  const { data } = useQuery({
    queryKey: ["isloggedIn"],
    queryFn: isLoggedIn,
  });

  if (!data) return <WelcomePage />;

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <StyledMain className=" bg-gray-100 m-4 ml-2 rounded-2xl">
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
