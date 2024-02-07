import { BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

function FolderDropdown({ item }) {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <BsThreeDotsVertical className=" self-center hover:bg-indigo-50 rounded-md transition-all p-2 h-8 w-8" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
        >
          <li>
            <Link to={`/folder/${item._id}`}>
              <IoEyeOutline className=" h-4 w-4 " />
              <p className=" text-md mr-2">View</p>
            </Link>
          </li>
          <li>
            <Link>
              <CiEdit className=" h-4 w-4 " />
              <p className=" text-md mr-2">Edit</p>
            </Link>
          </li>
          <li>
            <Link>
              <PiTrashThin className=" h-4 w-4 " />
              <p className=" text-md mr-2">Delete</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FolderDropdown;
