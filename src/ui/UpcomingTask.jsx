import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbClockShare } from "react-icons/tb";
import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function UpcomingTask({ visible }) {
  const { taskData } = useGetTask();
  const currentDate = new Date(Date.now());
  const upcomingTask = taskData
    ?.filter((el) => new Date(el.dueDate) > currentDate)
    ?.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    ?.slice(0, 2);

  const currentDay = currentDate.getUTCDate();

  return (
    <>
      <div
        className={`${visible === "lg" && "hidden lg:block"} ${visible === "sm" && "block lg:hidden"}`}
      >
        {upcomingTask?.map((task, i) => (
          <m.div
            key={task._id}
            initial="hidden"
            animate="animate"
            variants={variants}
            transition={{
              duration: 0.4,
              delay: `${i === 0 ? 0.2 : i * 0.3}`,
              type: "spring",
              damping: 10,
              stiffness: 80,
            }}
          >
            <div className="p-3 cursor-pointer hover:bg-gray-50 transition-all bg-white gap-3 rounded-xl grid grid-flow-col grid-cols-[auto,1fr,auto] place-items-center shadow-sm mb-2">
              <p className="bg-blue-800 w-min p-4 text-blue-50 rounded-2xl">
                <TbClockShare className="size-6 " />
              </p>
              <div className="w-full">
                <p className="font-medium">
                  due in {new Date(task?.dueDate).getUTCDate() - currentDay}{" "}
                  days
                </p>
                <div
                  className="tooltip w-32 flex tooltip-top overflow-hidden"
                  data-tip={task?.title}
                >
                  <h3 className="text-xl font-semibold truncate w-full text-start self-baseline">
                    {task?.title}
                  </h3>
                </div>
              </div>
              <span>
                <MdKeyboardArrowRight className="size-8" />
              </span>
            </div>
          </m.div>
        ))}
      </div>
    </>
  );
}

export default UpcomingTask;
