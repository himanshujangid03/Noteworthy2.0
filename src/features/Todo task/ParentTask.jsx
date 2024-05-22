import { useGetParentTask } from "../../hooks/Task hooks/useGetPrarentTask";

function ParentTask() {
  const { parentTaskData } = useGetParentTask();

  return (
    <div>
      {parentTaskData?.map((el) => (
        <div key={el._id}>
          <h1>
            {el.icon}
            {el.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default ParentTask;
