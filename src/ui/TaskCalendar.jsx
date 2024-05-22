import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

function TaskCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border w-min"
    />
  );
}

export default TaskCalendar;
