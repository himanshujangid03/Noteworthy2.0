import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const { isPending: isLoggingOut, mutate: mutateLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("You are successfully logged out.");
      navigate("/login");
    },
    onError: (err) => toast.error(err),
  });

  return { isLoggingOut, mutateLogout };
}
