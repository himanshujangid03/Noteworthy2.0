import { updateName } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateName() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: updateName,
    onSuccess: () => {
      toast.success("Name update successfully.");
      queryClient.invalidateQueries({
        queryKey: ["isloggedIn"],
      });
    },
  });

  return { mutate, isLoading };
}
