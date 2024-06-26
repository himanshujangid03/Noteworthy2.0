import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function useLogin() {
  const { reset } = useForm();
  const navigate = useNavigate();

  const { isPending: isSubmitting, mutate: mutateLogin } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Login succesfully.");
      reset();
      navigate("/");
    },
    onError: (err) => {
      toast.error(`${err}`);
      console.log(err);
    },
  });

  return { isSubmitting, mutateLogin };
}
