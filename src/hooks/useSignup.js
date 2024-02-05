import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useSignup() {
  const { reset } = useForm();
  const { isLoading: isSubmitting, mutate: mutateSignup } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account created succesfully.");
      reset();
    },
    onError: () => toast.error("Signup failed."),
  });

  return { isSubmitting, mutateSignup };
}
