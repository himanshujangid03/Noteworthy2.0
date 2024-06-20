import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { Link } from "react-router-dom";
import { TbClockShare } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

function TaskCalendar() {
  const [date, setDate] = useState(new Date());
  const { taskData } = useGetTask();
  const dueDate = taskData?.map((task) => new Date(task?.dueDate));
  const currentDate = new Date();

  const upcomingTask = taskData
    ?.filter((el) => new Date(el.dueDate) > currentDate)
    ?.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    ?.slice(0, 2);

  console.log(upcomingTask);

  //* Format date
  const currentDay = currentDate.getUTCDate();

  return (
    <>
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-min shadow-sm"
          dueDate={dueDate}
          currentDate={currentDate}
        />
        <div className="flex justify-between">
          <p className=" text-xl font-medium">Upcoming</p>
          <Link
            to={"/tasks"}
            className=" text-gray-500 hover:underline transition-all"
          >
            view all
          </Link>
        </div>
        <Link to={"/tasks"}>
          <div>
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
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}

export default TaskCalendar;
