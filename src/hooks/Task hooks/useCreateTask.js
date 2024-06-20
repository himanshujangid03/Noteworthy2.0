import { createTask } from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { isUpdating, mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("task created successfully.");
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
