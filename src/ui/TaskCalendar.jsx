import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useGetTask } from "@/hooks/Task hooks/useGetTask";
import { Link } from "react-router-dom";
import UpcomingTask from "./UpcomingTask";
import { motion as m } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.4,
  },
};

function TaskCalendar() {
  const [date, setDate] = useState(new Date());
  const { taskData } = useGetTask();
  const dueDate = taskData?.map((task) => new Date(task?.dueDate));
  const currentDate = new Date(Date.now());

  return (
    <>
      <div className="flex flex-col gap-4">
        <m.div
          initial="initial"
          animate="animate"
          variants={variants}
          transition={variants.transition}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-min shadow-sm"
            dueDate={dueDate}
            currentDate={currentDate}
          />
        </m.div>
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
          <UpcomingTask visible="lg" />
        </Link>
      </div>
    </>
  );
}

export default TaskCalendar;
