import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useDeleteNote() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["notesFromFolders"],
      });
    },
    onError: () => toast.error("something went wrong"),
  });

  return { isDeleting, mutate };
}
