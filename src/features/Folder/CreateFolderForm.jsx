import { useForm } from "react-hook-form";
import { IoIosAdd } from "react-icons/io";
import { useCreateFolder } from "../../hooks/useCreateFolder";
import Loader from "../../ui/Loader";

function CreateFolderForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { isCreating, mutate } = useCreateFolder();

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl font-bold text-center m-2">Create new folder</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="write name here"
            className={`input bg-slate-300 rounded-2xl w-max text-lg ${
              errors?.name?.message && "input-error"
            }`}
            {...register("name", { required: "This field is required" })}
          />
          {errors && (
            <span className=" text-error">{errors?.name?.message}</span>
          )}
          <button className="btn self-end btn-square !rounded-2xl btn-neutral hover:bg-gray-800	">
            {isCreating ? <Loader /> : <IoIosAdd className=" h-8 w-8" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderForm;
