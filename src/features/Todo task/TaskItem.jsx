import { useGetTask } from "@/hooks/Task hooks/useGetTask";

function TaskItem() {
  const { taskData } = useGetTask();
  return (
    <div>
      {taskData?.map((task) => (
        <div key={task._id}>
          <span>{task.emoji}</span>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskItem;
