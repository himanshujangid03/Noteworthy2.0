import TaskColumn from "./TaskColumn";
import { motion as m } from "framer-motion";

function MobileTaskColumnTab({ taskColumn, setTaskColumn }) {
  return (
    <div className="lg:hidden gap-6 flex flex-col">
      <div className=" flex flex-row justify-evenly bg-white py-2 rounded-xl">
        <div
          className={` ${taskColumn === "todo" && "bg-gray-200 font-semibold"} px-4 hover:bg-gray-100 p-3 rounded-xl text-lg font-medium cursor-pointer transition-all duration-200`}
          onClick={() => {
            setTaskColumn("todo");
          }}
        >
          To do
        </div>
        <div
          className={`${taskColumn === "progress" && "bg-gray-200 font-semibold"} hover:bg-gray-100 p-3 rounded-xl text-lg font-medium cursor-pointer transition-all duration-200`}
          onClick={() => {
            setTaskColumn("progress");
          }}
        >
          In Progress
        </div>
        <div
          className={`${taskColumn === "completed" && "bg-gray-200 font-semibold"} hover:bg-gray-100 p-3 rounded-xl text-lg font-medium cursor-pointer transition-all duration-200`}
          onClick={() => {
            setTaskColumn("completed");
          }}
        >
          Completed
        </div>
      </div>
      <m.div className=" w-full ">
        {taskColumn === "todo" && <TaskColumn title="To do" column="todo" />}
        {taskColumn === "progress" && (
          <TaskColumn title="In progress" column="pending" />
        )}
        {taskColumn === "completed" && (
          <TaskColumn title="Completed" column="completed" />
        )}
      </m.div>
    </div>
  );
}

export default MobileTaskColumnTab;
