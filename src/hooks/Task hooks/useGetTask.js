import { useQuery } from "@tanstack/react-query";
import { getTask } from "@/services/apiTask";

export function useGetTask() {
  const { data: taskData, isLoading } = useQuery({
    queryKey: ["getTask"],
    queryFn: getTask,
  });

  return { taskData, isLoading };
}
