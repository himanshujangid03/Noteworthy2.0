import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createNote } from "../../services/apiNote";

export function useCreateNote() {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      toast.success("Note created Successfully.");
      queryClient.invalidateQueries({
        queryKey: ["notesFromFolders"],
      });
      reset();
    },
    onError: () => toast.error("Something went wrong."),
  });

  return { isCreating, mutate };
}
