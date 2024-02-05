import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useLogin() {
  const { reset } = useForm();
  const navigate = useNavigate();

  const { isLoading: isSubmitting, mutate: mutateLogin } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login succesfully.");
      reset();
      navigate("/");
    },
    onError: () => toast.error("Login failed."),
  });

  return { isSubmitting, mutateLogin };
}
