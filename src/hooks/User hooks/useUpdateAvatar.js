import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAvatarImage, updateAvatarImage } from "../../services/apiAvatar";
import { useGetAvatar } from "./useGetAvatar";

export function useUpdateAvatar() {
  const { data } = useGetAvatar();
  const queryClient = useQueryClient();
  const { isPending: isUploading, mutate } = useMutation({
    mutationFn: data?.length === 0 ? createAvatarImage : updateAvatarImage,
    onSuccess: () => {
      toast.success("Image updated successfully.");
      queryClient.invalidateQueries({
        queryKey: ["avatar"],
      });
    },
    onError: (error) => toast.error(error),
  });

  return { isUploading, mutate };
}
