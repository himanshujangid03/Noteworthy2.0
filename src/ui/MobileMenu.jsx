import { useIsLoggedIn } from "@/hooks/Auth hooks/useIsLoggedIn";
import { FiEye } from "react-icons/fi";
import { HiOutlineLogout, HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import LogoutModal from "./LogoutModal";

function MobileMenu() {
  const { data } = useIsLoggedIn();

  return (
    <>
      <details className="dropdown dropdown-end ">
        <summary className="lg:hidden p-4 flex items-center hover:bg-base-200 rounded-xl cursor-pointer">
          <HiOutlineMenuAlt4 className="size-5" />
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 text-black shadow bg-accent rounded-box w-max text-md"
        >
          <li className="">
            <div className=" flex !text-black flex-col !bg-slate-200 mb-1 ">
              <p className=" self-start ">Signed In as</p>
              <p className=" text-gray-500 ">{data?.email}</p>
            </div>
          </li>
          <li>
            <Link to={"/user"}>
              <FiEye className=" size-4" />
              Profile <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <label htmlFor="my_modal_6">
              <HiOutlineLogout className="size-5" />
              Log out
            </label>
          </li>
        </ul>
      </details>
      <LogoutModal />
    </>
  );
}

export default MobileMenu;
