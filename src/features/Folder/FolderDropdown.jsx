import { CiEdit } from "react-icons/ci";
import { PiTrashThin } from "react-icons/pi";
import DeleteFolderModal from "./DeleteFolderModal";
import EditFolderModal from "./EditFolderModal";
import { motion as m } from "framer-motion";
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
        delay={0.1}
        className="rounded-xl dropdown grid grid-flow-col place-items-center grid-cols-[1fr,auto] dropdown-bottom bg-white h-20 p-4 shadow-lg shadow-gray-400/40"
      >
        <div
          className="tooltip tooltip-top "
          data-tip={currentFolder?.at(0)?.name}
        >
          <h3 className=" text-3xl font-medium w-64  truncate text-start ">
            {currentFolder?.at(0)?.name}
          </h3>
        </div>
        <div className="flex flex-row gap-2">
          <m.label
            htmlFor="edit_folder"
            className="cursor-pointer btn px-2 btn-ghost text-gray-600 hover:text-black"
          >
            <CiEdit className=" h-7 w-7  " />
          </m.label>
          <m.button
            onClick={() => document.getElementById("delete_folder").showModal()}
            className="btn px-2 btn-ghost text-gray-600 hover:text-black"
          >
            <PiTrashThin className=" h-7 w-7 " />
          </m.button>
        </div>
      </MotionPrimary>
      <DeleteFolderModal item={currentFolder?.at(0)} />
      <EditFolderModal item={currentFolder?.at(0)} />
    </>
  );
}

export default FolderDropdown;
