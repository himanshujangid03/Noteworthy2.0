import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import NewDate from "../../ui/NewDate";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import { IoIosArrowDown } from "react-icons/io";
import LogoutModal from "../../ui/LogOutModal";
import Avatar from "../../ui/Avatar";
import MotionDiv from "../../Animation/MotionDiv";

function UserProfile() {
  const { data } = useIsLoggedIn();

  return (
    <>
      <MotionDiv className=" invisible  md:visible h-min lg:visible w-[30rem] place-self-end flex flex-row justify-evenly">
        <div className=" flex">
          <div className=" flex mr-1">
            <Avatar position={"header"} />
          </div>
          <div className="shadow-xl shadow-gray-200 self-center ml-2 text-lg bg-accent p-2 rounded-xl font-medium text-black dropdown dropdown-hover">
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
              className="dropdown-content z-[1] menu p-2 text-black shadow bg-accent rounded-box w-86 text-md"
            >
              <li className="">
                <div className=" flex !text-black flex-col !bg-slate-200 mb-1 ">
                  <p className=" self-start ">Signed In as</p>
                  <p className=" text-gray-500 ">{data?.email}</p>
                </div>
              </li>
              <li>
                <Link to={"/user"}>
                  <FiEye className=" h-4 w-4" />
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <label htmlFor="my_modal_6">
                  <HiOutlineLogout className=" h-5 w-5" />
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
