import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbClockShare } from "react-icons/tb";

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
        {upcomingTask?.map((task) => (
          <div
            key={task._id}
            className="p-3 cursor-pointer hover:bg-gray-50 transition-all bg-white gap-3 rounded-xl grid grid-flow-col grid-cols-[auto,1fr,auto] place-items-center shadow-sm mb-2"
          >
            <p className="bg-blue-800 w-min p-4 text-blue-50 rounded-2xl">
              <TbClockShare className="size-6 " />
            </p>
            <div className="w-full">
              <p className="font-medium">
                due in {new Date(task?.dueDate).getUTCDate() - currentDay} days
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
        ))}
      </div>
    </>
  );
}

export default UpcomingTask;
