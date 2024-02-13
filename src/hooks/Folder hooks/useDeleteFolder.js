import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFolder } from "../../services/apiFolder";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useDeleteFolder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      toast.success("Folder deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["folders"],
      });
      navigate("/folder");
    },
    onError: () => toast.error("Folder deletion failed."),
  });

  return { isDeleting, mutate };
}
