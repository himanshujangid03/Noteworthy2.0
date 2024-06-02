import { useForm } from "react-hook-form";
import { IoIosAdd } from "react-icons/io";
import Loader from "../../ui/Loader";
import { useCreateActivityLog } from "../../hooks/Activity hooks/useCreateActivityLog";
import { useCreateTask } from "@/hooks/Task hooks/useCreateTask";

function CreateTaskForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { isUpdating, mutate } = useCreateTask();
  const { mutate: mutateActivityFn } = useCreateActivityLog();

  function onSubmit(data) {
    mutate(data);
    const activityData = {
      name: data.title,
      updatedAt: Date.now(),
      action: "Create",
    };
    mutateActivityFn(activityData);
  }

  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl font-bold text-center m-2">Create new task</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className="text-xl">
            Title
          </label>
          <input
            type="text"
            id="title"
            autoComplete="false"
            placeholder="write task here..."
            className={`input bg-slate-300 rounded-2xl w-max text-lg ${
              errors?.name?.message && "input-error"
            }`}
            {...register("title", { required: "This field is required" })}
          />
          {errors && (
            <span className=" text-error">{errors?.name?.message}</span>
          )}
          <button className="btn self-end btn-square !rounded-2xl btn-neutral hover:bg-gray-800	">
            {isUpdating ? <Loader /> : <IoIosAdd className=" h-8 w-8" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
