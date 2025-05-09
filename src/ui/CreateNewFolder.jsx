import { HiOutlineFolderPlus } from "react-icons/hi2";
import CreateFolderModal from "../features/Folder/CreateFolderModal";

function CreateNewFolder() {
  return (
    <>
      <label
        htmlFor="create_folder_modal"
        className="btn btn-outline btn-primary border-dashed m-4 mt-6 text-sm hover:shadow-2xl hover:shadow-indigo-200"
      >
        <HiOutlineFolderPlus className=" h-6 w-6" />
        Add new Folder
      </label>
      <CreateFolderModal />
    </>
  );
}

export default CreateNewFolder;
