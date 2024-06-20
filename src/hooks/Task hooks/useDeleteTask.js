import { deleteTask } from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { isUpdating, mutate } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      toast.success("Task deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["getTask"],
      });
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  return { isUpdating, mutate };
}
