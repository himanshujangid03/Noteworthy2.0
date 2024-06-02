import { updateTask } from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateTask() {
  const queryClient = useQueryClient();
  const { isUpdating, mutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      toast.success("task updated successfully.");
      queryClient.invalidateQueries({
        queryKey: ["getTask"],
      });
    },
    onError: () => toast.error("task updation failed."),
  });

  return { isUpdating, mutate };
}
