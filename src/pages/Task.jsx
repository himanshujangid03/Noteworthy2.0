import TaskCalendar from "@/ui/TaskCalendar";
import ParentTask from "../features/Todo task/ParentTask";
import PageHeading from "../ui/PageHeading";

function Task() {
  return (
    <div>
      <PageHeading heading={"Task"} />
      <ParentTask />
      <TaskCalendar />
    </div>
  );
}

export default Task;
