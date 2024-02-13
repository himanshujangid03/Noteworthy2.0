import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Loader from "../../ui/Loader";
import { CiCircleAlert } from "react-icons/ci";
import { useDeleteFolder } from "../../hooks/Folder hooks/useDeleteFolder";

function DeleteFolderModal({ item }) {
  const folderId = item?._id;
  const { isDeleting, mutate } = useDeleteFolder();
  const { handleSubmit } = useForm();
  function onSubmit(data) {
    const updateData = { ...data, folderId };
    mutate(updateData);
  }

  return (
    <div>
      <dialog id="delete_folder" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm p-2 !btn-circle btn-ghost absolute right-2 top-2">
              <RxCross2 className=" h-5 w-5" />
            </button>
          </form>
          <form
            className=" flex flex-col gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <div className="w-min flex self-center rounded-full bg-red-200">
                <CiCircleAlert className=" h-10 w-10 text-error self-center" />
              </div>
              <h1 className=" text-2xl text-error text-center mt-2 font-semibold">
                Delete Folder
              </h1>
              <p className=" text-xl text-gray-800 text-center mb-4">
                You are going to delete the{" "}
                <span className=" font-semibold">{item?.name}</span>. Are you
                sure?
              </p>
            </div>
            <button className="btn btn-error self-end w-32">
              {isDeleting ? <Loader /> : "Yes, delete"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteFolderModal;
