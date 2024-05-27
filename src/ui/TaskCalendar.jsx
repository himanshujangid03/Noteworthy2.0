import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { Link } from "react-router-dom";
import { TbClockShare } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion as m } from "framer-motion";

function TaskCalendar() {
  const [date, setDate] = useState(new Date());
  const { taskData } = useGetTask();
  const dueDate = taskData?.map((task) => new Date(task?.dueDate));
  const currentDate = new Date();
  const [animate, setAnimate] = useState(false);

  const upcomingTask = taskData?.at(0);

  //* Format date
  const formatDate = new Date(upcomingTask?.dueDate);
  const days = formatDate.getUTCDate();

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
          <div
            className="p-3 cursor-pointer hover:bg-gray-50 transition-all bg-white gap-3 rounded-xl grid grid-flow-col grid-cols-[auto,1fr,auto] place-items-center shadow-sm"
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
          >
            <p className="bg-blue-800 w-min p-4 text-blue-50 rounded-2xl">
              <TbClockShare className="size-6 " />
            </p>
            <div className="w-full">
              <p className="font-medium">due in {days} days</p>
              <div
                className="tooltip w-32 flex tooltip-top overflow-hidden"
                data-tip={upcomingTask?.title}
              >
                <h3 className="text-xl font-semibold truncate w-full text-start self-baseline">
                  {upcomingTask?.title}
                </h3>
              </div>
            </div>
            <m.span animate={{ x: animate ? 3 : 0 }}>
              <MdKeyboardArrowRight className="size-8" />
            </m.span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default TaskCalendar;
