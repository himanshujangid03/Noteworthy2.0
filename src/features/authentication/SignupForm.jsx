import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSignup } from "../../hooks/Auth hooks/useSignup";
import GoogleAuth from "./google auth/GoogleAuth";

function SignUpForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting, mutateSignup } = useSignup();
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = (data) => {
    mutateSignup(data);
    navigate("/");
    reset();
  };

  return (
    <div className=" m-2">
      <Link className=" btn-link flex ">
        <IoIosArrowRoundBack className=" self-center size-4" />
        back to home page
      </Link>
      <div className="flex flex-col max-w-[30rem] items-center m-auto card mt-20 bg-gray-50 p-6 lg:p-10 rounded-3xl">
        <h1 className="text-2xl lg:text-4xl mb-4 font-semibold">
          Create new account
        </h1>
        <GoogleAuth />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-full m-auto gap-4 align-middle"
        >
          <div className=" flex flex-col ">
            <input
              type="name"
              placeholder="Enter your name"
              className={`input text-xl input-bordered w-full h-12 lg:h-14 ${errors?.name?.message && "input-error"}`}
              {...register("name", { required: "This field is required" })}
            />
            <span className=" text-error text-lg font-medium">
              {errors && errors?.name?.message}
            </span>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input text-xl input-bordered w-full h-12 lg:h-14 ${errors?.email?.message && "input-error"}`}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <span className=" text-error text-lg font-medium">
              {errors && errors?.email?.message}
            </span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className={`input text-xl  input-bordered w-full h-12 lg:h-14 ${errors?.password?.message && "input-error"}`}
              {...register("password", { required: "This field is required" })}
            />
            <span className=" text-error text-lg font-medium">
              {errors && errors?.password?.message}
            </span>
          </div>
          <button
            className={`btn btn-primary w-full h-12 lg:h-14 !rounded-xl !text-lg lg:!text-xl mt-2 ${
              isSubmitting && "btn-disabled cursor-not-allowed"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Create my account"}
          </button>
        </form>
        <div className=" mt-2">
          <p>
            Already have an account.{" "}
            <Link to={"/login"} className="link link-info ml-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
