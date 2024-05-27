import { useGetTask } from "@/hooks/Task hooks/useGetTask";

function TaskColumn() {
  const { taskData } = useGetTask();

  return (
    <>
      {taskData?.map((task) => (
        <div key={task?._id} className="w-56 shrink-0">
          <div className="mb-3 flex justify-between items-center">
            <h3>{task?.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskColumn;
