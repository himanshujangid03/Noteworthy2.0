import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createActivityLog } from "../../services/apiActivity";

export function useCreateActivityLog() {
  const queryClinet = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createActivityLog,
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["getActivityLog"],
      });
    },
  });

  return { isPending, mutate };
}
