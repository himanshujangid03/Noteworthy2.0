import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import NewDate from "../../ui/NewDate";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import { IoIosArrowDown } from "react-icons/io";
import LogoutModal from "../../ui/LogoutModal";
import Avatar from "../../ui/Avatar";
import MotionDiv from "../../Animation/MotionDiv";

function UserProfile() {
  const { data } = useIsLoggedIn();

  return (
    <>
      <MotionDiv className=" hidden  md:flex h-min  w-[30rem] place-self-end lg:flex flex-row justify-evenly">
        <div className=" flex">
          <div className=" flex mr-1">
            <Avatar position={"header"} />
          </div>
          <div className="shadow-xl shadow-gray-200 self-center ml-2 text-lg bg-base-200/50 p-2 rounded-xl font-medium text-black dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className=" m-1 flex min-w-32 justify-between "
            >
              {data?.name}
              <IoIosArrowDown className=" text-gray-400 self-center ml-2" />
            </div>
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
          </div>
        </div>
        <NewDate />
      </MotionDiv>
      <LogoutModal />
    </>
  );
}

export default UserProfile;
