import { BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import EditFolderModal from "./EditFolderModal";
import DeleteFolderModal from "./DeleteFolderModal";

function FolderDropdown({ item }) {
  return (
    <>
      <div className="dropdown dropdown-bottom absolute right-4">
        <div tabIndex={0} role="button">
          <BsThreeDotsVertical className=" self-center hover:bg-indigo-50 rounded-md transition-all p-2 h-8 w-8" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
        >
          <li>
            <label htmlFor="edit_folder">
              <CiEdit className=" h-5 w-5 " />
              <p className=" text-lg mx-2">Edit</p>
            </label>
          </li>
          <li>
            <button
              onClick={() =>
                document.getElementById("delete_folder").showModal()
              }
            >
              <PiTrashThin className=" h-5 w-5 " />
              <p className=" text-lg mr-2">Delete</p>
            </button>
          </li>
        </ul>
      </div>
      <DeleteFolderModal item={item} />
      <EditFolderModal item={item} />
    </>
  );
}

export default FolderDropdown;
