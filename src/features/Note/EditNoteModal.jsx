import { useForm } from "react-hook-form";
import { useNoteFromFolder } from "../../hooks/useNoteFromFolder";
import { useParams } from "react-router";
import { useUpdateNote } from "../../hooks/useUpdateNote";
import Loader from "../../ui/Loader";
import { RxCross2 } from "react-icons/rx";

function EditNoteModal() {
  const { isUpdating, mutate } = useUpdateNote();
  const { noteId } = useParams();
  const { register, handleSubmit } = useForm();
  const { notes } = useNoteFromFolder();
  const currentNote = notes?.find((note) => note._id === noteId);

  function onSubmit(data) {
    const updatedData = { ...data, noteId };
    mutate(updatedData);
  }
  return (
    <>
      <dialog id="edit_note" className="modal">
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
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="title">
                Name
              </label>
              <input
                type="text"
                id="title"
                className="input input-md text-xl w-72 bg-slate-300 "
                {...register("title", { required: "This field is required" })}
                defaultValue={currentNote?.title}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                className=" textarea textarea-lg h-44 text-xl bg-slate-300 flex"
                htmlFor="content"
                {...register("content", { required: "This field is required" })}
                defaultValue={currentNote?.content}
              />
            </div>
            <button className="btn !rounded-xl btn-primary self-end w-36">
              {isUpdating ? <Loader /> : "Save"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default EditNoteModal;
