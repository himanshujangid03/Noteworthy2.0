import { useMutation } from "@tanstack/react-query";
import { googleSignIn } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useGoogleSignIn() {
  const { isPending: isSigningIn, mutate } = useMutation({
    mutationFn: googleSignIn,
    onSuccess: () => {
      toast.success("Successfully signed In.");
    },
    onError: () => {
      toast.error("Signing In failed. Please try again later.");
    },
  });

  return { isSigningIn, mutate };
}
