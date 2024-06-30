import { Outlet } from "react-router";
import Header from "../features/dashboard/Header";
import Sidebar from "../features/dashboard/Sidebar";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import Welcome from "../pages/Welcome";

function AppLayout() {
  const { data } = useIsLoggedIn();

  if (!data) return <Welcome />;

  return (
    <>
      <div className="overflow-x-hidden bg-base-100 grid grid-flow-col grid-cols-[auto,1fr] h-dvh ">
        <Sidebar />
        <div className="overflow-x-hidden grid grid-rows-[auto,1fr]">
          <Header />
          <main className="overflow-y-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
