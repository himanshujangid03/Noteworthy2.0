import TaskCalendar from "@/ui/TaskCalendar";
import PageHeading from "../ui/PageHeading";
import TaskItem from "@/features/Todo task/TaskItem";

function Task() {
  return (
    <div>
      <PageHeading heading={"Task"} />
      <TaskItem />
      <TaskCalendar />
    </div>
  );
}

export default Task;
