import { useForm } from "react-hook-form";
import { IoIosAdd } from "react-icons/io";
import Loader from "../../ui/Loader";
import { useCreateActivityLog } from "../../hooks/Activity hooks/useCreateActivityLog";
import { useCreateTask } from "@/hooks/Task hooks/useCreateTask";

function CreateTaskForm() {
  const { register, handleSubmit, formState, reset } = useForm();
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
    reset();
    mutateActivityFn(activityData);
  }

  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl font-bold text-center m-2">Create new task</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2">
          <label htmlFor="title" className="text-xl">
            Title
          </label>
          <input
            type="text"
            id="title"
            autoComplete="false"
            placeholder="write task here..."
            className={`input bg-slate-300 rounded-2xl w-max text-lg ${
              errors?.title?.message && "input-error"
            }`}
            {...register("title", { required: "This field is required" })}
          />
          {errors && (
            <span className=" text-error">{errors?.title?.message}</span>
          )}
          <label htmlFor="dueDate" className="text-xl">
            Due date
          </label>
          <input
            type="date"
            id="dueDate"
            autoComplete="false"
            placeholder="write task here..."
            className={`input bg-slate-300 rounded-2xl w-max text-lg ${
              errors?.dueDate?.message && "input-error"
            }`}
            {...register("dueDate", {
              required: "This field is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const currentDate = new Date();
                selectedDate.setHours(0, 0, 0, 0);
                currentDate.setHours(0, 0, 0, 0);
                return (
                  selectedDate >= currentDate ||
                  "Due date cannot be in the past"
                );
              },
            })}
          />
          {errors && (
            <span className=" text-error">{errors?.dueDate?.message}</span>
          )}
          <label htmlFor="name" className="text-xl">
            Priority
          </label>
          <select
            id="priority"
            className="select select-bordered w-fit text-xl bg-slate-300 outline-none border-none rounded-2xl"
            {...register("priority", { required: "This field is required." })}
          >
            <option value="low" selected>
              Low
            </option>
            <option value="md">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="btn self-end btn-square !rounded-2xl btn-neutral hover:bg-gray-800	">
            {isUpdating ? <Loader /> : <IoIosAdd className="size-8" />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;
