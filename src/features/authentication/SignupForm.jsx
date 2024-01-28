import styled from "styled-components";
import GoogleAuth from "./google auth/GoogleAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin: 0 auto;
  gap: 1rem;
  align-items: center;
`;

function SignUpForm() {
  const { register, handleSubmit, reset } = useForm();

  const { isLoading: isSubmitting, mutate } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Account created succesfully.");
      reset();
    },
    onError: () => toast.error("Signup failed."),
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  const onError = () => {};
  return (
    <div className="flex flex-col items-center">
      <GoogleAuth />
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="name"
            placeholder="Enter your name"
            className="input input-bordered w-[20rem]"
            {...register("name")}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-[20rem]"
            {...register("email")}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-[20rem]"
            {...register("password")}
          />
        </div>
        <button className="btn btn-primary w-full">
          {isSubmitting ? <Loader /> : "Create my account"}
        </button>
      </StyledForm>
      <div className=" mt-2">
        <p>
          Already have an account.{" "}
          <Link to={"/login"} className="link link-info">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
