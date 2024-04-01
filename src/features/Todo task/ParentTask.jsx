import { useGetParentTask } from "../../hooks/Task hooks/useGetPrarentTask";

function ParentTask() {
  const { parentTaskData } = useGetParentTask();
  console.log(parentTaskData);
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
