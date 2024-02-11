import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFolder } from "../../services/apiFolder";
import toast from "react-hot-toast";

export function useUpdateFolder() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate } = useMutation({
    mutationFn: updateFolder,
    onSuccess: () => {
      toast.success("Folder updated successfully.");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
      });
    },
    onError: () => toast.error("Folder updation failed."),
  });

  return { isUpdating, mutate };
}
