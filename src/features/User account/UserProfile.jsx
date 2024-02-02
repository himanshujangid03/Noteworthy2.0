import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import NewDate from "../../ui/NewDate";

function UserProfile() {
  return (
    <div className=" w-[30rem] flex flex-row justify-evenly">
      <div>
        <div className="avatar placeholder ">
          <div className="bg-neutral text-neutral-content rounded-full w-[3rem] m-1">
            <span className="text-2xl">D</span>
          </div>
        </div>
        <div className=" self-center ml-2 text-lg font-bold dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" m-1">
            User name
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 text-black shadow bg-base-100 rounded-box w-86 text-md"
          >
            <li className="">
              <div className=" flex !text-black flex-col !bg-slate-200 mb-1 ">
                <p className=" self-start ">Signed In as</p>
                <p className=" text-gray-500 ">himanshujangid@gmail.com</p>
              </div>
            </li>
            <li>
              <Link to={"/user"}>
                <FiEye className=" h-4 w-4" />
                Profile <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  document.getElementById("logout_modal").showModal()
                }
              >
                <HiOutlineLogout className=" h-5 w-5" />
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <NewDate />
    </div>
  );
}

export default UserProfile;
