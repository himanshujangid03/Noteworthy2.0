import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useGetTask } from "@/hooks/Task hooks/useGetTask";

function TaskCalendar() {
  const [date, setDate] = useState(new Date());
  const { taskData } = useGetTask();
  const dueDate = taskData?.map((task) => new Date(task?.dueDate));

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-min"
      dueDate={dueDate}
    />
  );
}

export default TaskCalendar;
