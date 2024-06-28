import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isLoggingOut, mutate: mutateLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("You are successfully logged out. Comeback soon");
      queryClient.invalidateQueries({
        queryKey: ["isloggedIn"],
      });
      navigate("/");
    },
    onError: (err) => toast.error(err),
  });

  return { isLoggingOut, mutateLogout };
}
