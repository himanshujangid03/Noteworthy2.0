import { useMutation, useQueryClient } from "@tanstack/react-query";
import { googleLogout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useGoogleLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: mutateGoogleLogout } = useMutation({
    mutationFn: googleLogout,
    onSuccess: () => {
      toast.success("Successfully logged out from google account");
      navigate("/login");
      queryClient.invalidateQueries({
        queryKey: ["isloggedIn"],
      });
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return { isPending, mutateGoogleLogout };
}
