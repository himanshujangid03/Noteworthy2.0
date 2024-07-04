import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { motion as m } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function TaskOverview() {
  const { taskData } = useGetTask();
  const todo = taskData ? taskData?.filter((el) => el.status === "todo") : 0;
  const progress = taskData?.filter((el) => el.status === "pending");
  const completed = taskData?.filter((el) => el.status === "completed");
  const overdue = taskData?.filter(
    (el) => new Date(el.dueDate) < new Date(Date.now())
  );
  const columns = ["todo", "progress", "completed", "overdue"];

  return (
    <div className="">
      <h1 className="text-2xl font-medium mb-1">Task Analysis</h1>
      <m.div className="grid lg:grid-flow-col lg:grid-cols-4 grid-flow-row grid-cols-2 h-44">
        {columns.map((col, i) => (
          <m.div
            key={i}
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            <div className=" bg-white m-2 p-5 flex flex-col justify-between gap-3 ring-1 ring-gray-300  rounded-3xl">
              <p className=" text-2xl lg:text-3xl md:text-xl font-medium capitalize">
                {col}
              </p>
              <span className=" lg:text-6xl md:text-3xl text-2xl font-bold font-cabinet self-end">
                {col === "todo" && (taskData ? todo?.length : 0)}
                {col === "progress" && (taskData ? progress?.length : 0)}
                {col === "completed" && (taskData ? completed?.length : 0)}
                {col === "overdue" && (taskData ? overdue?.length : 0)}
              </span>
            </div>
          </m.div>
        ))}
      </m.div>
    </div>
  );
}

export default TaskOverview;
