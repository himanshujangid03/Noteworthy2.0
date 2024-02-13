import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import DeleteFolderModal from "./DeleteFolderModal";
import EditFolderModal from "./EditFolderModal";
import { useParams } from "react-router";
import { useGetFolder } from "../../hooks/Folder hooks/useGetFolder";
import MotionPrimary from "../../Animation/MotionPrimary";

function FolderDropdown() {
  const { data } = useGetFolder();
  const { folderId } = useParams();
  const currentFolder = data?.filter((obj) => obj._id === folderId);

  return (
    <>
      <MotionPrimary
        delay={0.2}
        className="dropdown grid grid-flow-col place-items-center grid-cols-[1fr,auto] dropdown-bottom bg-white h-20 rounded-3xl p-4 shadow-xl shadow-gray-200"
      >
        <div
          className="tooltip tooltip-top "
          data-tip={currentFolder?.at(0)?.name}
        >
          <h3 className=" text-3xl font-medium w-64  truncate text-start ">
            {currentFolder?.at(0)?.name}
          </h3>
        </div>
        <div className="flex flex-row gap-4">
          <label htmlFor="edit_folder" className="cursor-pointer">
            <CiEdit className=" h-8 w-8 hover:text-info" />
          </label>
          <button
            onClick={() => document.getElementById("delete_folder").showModal()}
            className=""
          >
            <PiTrashThin className=" h-8 w-8 hover:text-error " />
          </button>
        </div>
      </MotionPrimary>
      <DeleteFolderModal item={currentFolder?.at(0)} />
      <EditFolderModal item={currentFolder?.at(0)} />
    </>
  );
}

export default FolderDropdown;
