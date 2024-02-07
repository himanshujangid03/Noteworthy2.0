import { useForm } from "react-hook-form";

function DeleteNoteModal() {
  const { handleSubmit } = useForm();
  function onSubmit() {}

  return (
    <div>
      <dialog id="delete_note" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            className=" flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button className="btn btn-primary self-end w-44">Delete</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteNoteModal;
