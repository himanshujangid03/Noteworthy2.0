import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createFolder } from "../../services/apiFolder";
import toast from "react-hot-toast";

export function useCreateFolder() {
  const queryClient = useQueryClient();
  const { reset } = useForm();
  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      toast.success("Folder created Successfully.");
      reset();
      queryClient.invalidateQueries({
        queryKey: ["folders"],
      });
    },
    onError: () => toast.error("Something went wrong."),
  });

  return { isCreating, mutate };
}
