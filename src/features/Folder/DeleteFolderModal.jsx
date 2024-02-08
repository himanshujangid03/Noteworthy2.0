import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Loader from "../../ui/Loader";
import { useDeleteFolder } from "../../hooks/useDeleteFolder";

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
            className=" flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className=" text-2xl mb-4">
              Are you sure to delete this folder.
            </h1>
            <button className="btn btn-error self-end w-32">
              {isDeleting ? <Loader /> : "Delete"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteFolderModal;
