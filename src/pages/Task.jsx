import CreateTaskModal from "@/features/Todo task/CreateTaskModal";
import TaskColumn from "@/ui/TaskColumn";
import { IoIosAdd } from "react-icons/io";
import { motion as m } from "framer-motion";
import { useState } from "react";
import MobileTaskColumnTab from "@/ui/MobileTaskColumnTab";

function Task() {
  const [taskColumn, setTaskColumn] = useState("todo");

  return (
    <>
      <div className="flex flex-col gap-5 p-4 lg:pb-4 pb-20">
        <div className="">
          <label
            className="btn btn-neutral !text-xl float-end !rounded-xl"
            htmlFor="create_task_modal"
          >
            <IoIosAdd className="size-8" /> new task
          </label>
        </div>
        <MobileTaskColumnTab
          taskColumn={taskColumn}
          setTaskColumn={setTaskColumn}
        />
        <m.div
          layout
          className=" hidden w-full lg:grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          <TaskColumn title="To do" column="todo" />
          <TaskColumn title="In progress" column="pending" />
          <TaskColumn title="Completed" column="completed" />
        </m.div>
      </div>
      <CreateTaskModal />
    </>
  );
}

export default Task;
