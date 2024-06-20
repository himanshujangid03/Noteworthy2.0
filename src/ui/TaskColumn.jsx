import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { FormattedDate } from "./formattedDate";
import { CiCalendar } from "react-icons/ci";
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
  console.log(filterCards);

  return (
    <>
      <div className=" shrink-0">
        <div className="mb-3 text-3xl px-6 flex flex-row justify-between items-center bg-white/70 py-4 rounded-xl">
          <h3 className="font-medium">{title}</h3>
          <span className="">{filterCards?.length}</span>
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
                className={`bg-white w-full relative p-6 rounded-[2rem] shadow-md my-4  flex flex-col justify-between before:absolute before:-left-1 before:top-[25%] before:rounded-xl before:w-3      before:h-20  ${card.priority === "high" && "before:bg-red-500"} ${card.priority === "md" && "before:bg-orange-500"} ${card.priority === "low" && "before:bg-green-500"} `}
              >
                <div className=" self-end">
                  <TaskDropdown taskId={card._id} />
                </div>

                <div className=" flex flex-col gap-4">
                  <h3 className="text-2xl text-wrap">{card.title}</h3>
                  <span className="badge py-4 px-3 flex items-center gap-1">
                    <CiCalendar className="size-4" />
                    <FormattedDate date={card.dueDate} />
                  </span>
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
