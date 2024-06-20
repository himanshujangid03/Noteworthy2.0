import CreateTaskModal from "@/features/Todo task/CreateTaskModal";
import TaskColumn from "@/ui/TaskColumn";
import { IoIosAdd } from "react-icons/io";

function Task() {
  return (
    <>
      <div className="flex flex-col gap-10 h-full  p-4">
        <div className="">
          <label
            className="btn btn-neutral !text-xl float-end !rounded-xl"
            htmlFor="create_task_modal"
          >
            <IoIosAdd className="size-8" /> new task
          </label>
        </div>
        <div className=" w-full grid grid-flow-col grid-cols-3 gap-6">
          <TaskColumn title="To do" column="todo" />
          <TaskColumn title="In progress" column="pending" />
          <TaskColumn title="Completed" column="completed" />
        </div>
      </div>
      <CreateTaskModal />
    </>
  );
}

export default Task;
