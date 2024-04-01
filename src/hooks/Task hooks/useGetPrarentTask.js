import { useQuery } from "@tanstack/react-query";
import { getParentTask } from "../../services/apiParentTask";

export function useGetParentTask() {
  const { data: parentTaskData, isLoading } = useQuery({
    queryKey: ["parentTask"],
    queryFn: getParentTask,
  });

  return { parentTaskData, isLoading };
}
