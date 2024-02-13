import { useForm } from "react-hook-form";
import { IoIosAdd } from "react-icons/io";
import Loader from "../../ui/Loader";
import { useCreateNote } from "../../hooks/Notes hooks/useCreateNote";
import { useParams } from "react-router";

function CreateNoteForm() {
  const { folderId } = useParams();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { isCreating, mutate } = useCreateNote();

  function onSubmit(data) {
    const newData = { ...data, folderId };
    mutate(newData);
    reset();
  }

  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl font-bold text-center m-2">New note entry</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2">
          <label htmlFor="title" className="text-xl font-medium">
            Name
          </label>
          <input
            type="text"
            id="title"
            placeholder="write name here"
            className={`input bg-slate-300 rounded-xl w-max text-lg ${
              errors?.title?.message && "input-error"
            }`}
            {...register("title", { required: "This field is required" })}
          />
          {errors && (
            <span className=" text-error">{errors?.name?.message}</span>
          )}
          <label htmlFor="content" className="text-xl font-medium">
            Content
          </label>
          <textarea
            type="text"
            id="content"
            placeholder="write something here..."
            className={`textarea bg-slate-300 textarea-lg h-24 rounded-xl w-full text-lg ${
              errors?.content?.message && "textarea-error"
            }`}
            {...register("content", { required: "This field is required" })}
          />
          {errors && (
            <span className=" text-error">{errors?.name?.message}</span>
          )}
          <button className="btn self-start w-36 !rounded-2xl btn-neutral hover:bg-gray-800	">
            {isCreating ? (
              <>
                <Loader />
                <p className=" text-center p-0">Adding...</p>
              </>
            ) : (
              <>
                <IoIosAdd className=" h-8 w-8" />
                <p className=" text-center p-0">Add new</p>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNoteForm;
