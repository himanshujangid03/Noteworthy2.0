import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFolder } from "../../services/apiFolder";
import toast from "react-hot-toast";

export function useDeleteFolder() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      toast.success("Folder deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
      });
    },
    onError: () => toast.error("Folder deletion failed."),
  });

  return { isDeleting, mutate };
}
