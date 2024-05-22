import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader";
import { useUpdateFolder } from "../../hooks/Folder hooks/useUpdateFolder";
import { useCreateActivityLog } from "../../hooks/Activity hooks/useCreateActivityLog";

function EditFolderModal({ item }) {
  const folderId = item?._id;
  const { register, handleSubmit } = useForm();
  const { isUpdating, mutate } = useUpdateFolder();
  const { mutate: mutateActivityFn } = useCreateActivityLog();

  function onSubmit(data) {
    const updatedData = { ...data, folderId };
    mutate(updatedData);
    const activityData = {
      name: data.name,
      updatedAt: Date.now(),
      action: "Update",
    };
    mutateActivityFn(activityData);
  }

  return (
    <>
      <input type="checkbox" id="edit_folder" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h1 className=" text-3xl font-bold text-center m-2">
            Update folder name
          </h1>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-2">
              <label htmlFor="name" className="text-xl font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={item?.name}
                className="input bg-slate-300 rounded-xl w-max text-lg"
                {...register("name")}
              />

              <button className="btn transition-all  self-end w-36 !rounded-2xl btn-neutral hover:bg-gray-800	">
                {isUpdating ? (
                  <>
                    <Loader />
                    <p className=" text-center p-0">saving...</p>
                  </>
                ) : (
                  <>
                    <p className=" text-center p-0">Save</p>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="edit_folder"></label>
      </div>
    </>
  );
}

export default EditFolderModal;
