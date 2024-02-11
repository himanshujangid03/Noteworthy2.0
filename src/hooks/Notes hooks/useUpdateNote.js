import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNote } from "../../services/apiNote";
import toast from "react-hot-toast";

export function useUpdateNote() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate } = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      toast.success("Note updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["notesFromFolders"],
      });
    },
    onError: () => toast.error("Something went wrong"),
  });

  return { isUpdating, mutate };
}
