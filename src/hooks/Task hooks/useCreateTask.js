import { createTask } from "@/services/apiTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCreateActivityLog } from "../Activity hooks/useCreateActivityLog";

export function useCreateTask() {
  const { mutate: mutateActivityFn } = useCreateActivityLog();
  const queryClient = useQueryClient();
  const { isUpdating, mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: (data) => {
      toast.success("task created successfully.");
      queryClient.invalidateQueries({
        queryKey: ["getTask"],
      });
      console.log(data);
      // mutateActivityFn(activityData);
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  return { isUpdating, mutate };
}
