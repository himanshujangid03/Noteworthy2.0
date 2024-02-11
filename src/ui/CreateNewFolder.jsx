import { IoAdd } from "react-icons/io5";
import CreateFolderModal from "../features/Folder/CreateFolderModal";

function CreateNewFolder() {
  return (
    <>
      <label
        htmlFor="create_folder_modal"
        className="btn btn-outline btn-primary border-dashed mr-10 text-sm hover:shadow-2xl hover:shadow-indigo-200"
      >
        <IoAdd className=" h-6 w-6" />
        Add new Folder
      </label>
      <CreateFolderModal />
    </>
  );
}

export default CreateNewFolder;
