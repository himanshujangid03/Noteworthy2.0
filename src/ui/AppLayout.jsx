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
      <div className=" bg-base-100 overflow-hidden grid grid-flow-col grid-cols-[auto,1fr] h-full w-full m-0 ">
        <Sidebar />
        <div className="">
          <Header />
          <main className=" overflow-x-hidden overflow-y-scroll p-4 h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
