import { deleteTask } from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { isUpdating, mutate } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {},
  });

  return { isUpdating, mutate };
}
