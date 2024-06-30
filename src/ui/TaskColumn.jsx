import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { FormattedDate } from "./formattedDate";
import { GoClock } from "react-icons/go";
import TaskDropdown from "./TaskDropdown";
import { AnimatePresence, motion as m } from "framer-motion";

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
  },
};

function TaskColumn({ title, column }) {
  const { taskData } = useGetTask();
  const filterCards = taskData?.filter((card) => card.status === column);

  return (
    <>
      <div className="bg-base-200/50 p-3 rounded-2xl shadow-lg ring-1 ring-base-200">
        <div className=" mb-3 text-3xl px-6 flex flex-row gap-5 items-center text-gray-500 py-4 rounded-xl">
          <h3 className="font-medium">{title}</h3>
          <span className="bg-base-300 w-8 text-2xl font-medium text-center rounded-lg text-gray-800">
            {filterCards?.length ? filterCards.length : 0}
          </span>
        </div>
        <div className=" w-full overflow-y-scroll ">
          <AnimatePresence>
            {filterCards?.map((card, i) => (
              <m.div
                layout
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: i * 0.2, duration: 0.4 }}
                key={card._id}
                className={`bg-gray-50 w-full relative p-6 rounded-3xl shadow-md my-4 flex flex-col justify-between `}
              >
                <div className=" self-end">
                  <TaskDropdown taskId={card._id} />
                </div>
                <div className=" flex flex-col gap-4">
                  <h3 className="text-3xl font-medium text-wrap">
                    {card.title}
                  </h3>
                  <span className=" flex text-lg items-center gap-1">
                    <GoClock className="size-5 mr-1" />
                    <FormattedDate date={Date.now()} /> -
                    <FormattedDate date={card.dueDate} />
                  </span>
                  <div className="flex items-center justify-between">
                    <div className=" text-xl capitalize flex items-center gap-2">
                      <span
                        className={`size-4 rounded-full ${card.priority === "high" && "bg-red-500"} ${card.priority === "md" && "bg-orange-500"} ${card.priority === "low" && "bg-green-500"} `}
                      ></span>
                      {card.priority === "md" ? "medium" : card.priority}
                    </div>
                    {card.overdue && (
                      <p className=" text-lg p-1 bg-red-500 rounded-lg px-3 text-red-50 font-light">
                        Overdue
                      </p>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default TaskColumn;
