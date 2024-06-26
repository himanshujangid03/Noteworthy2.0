import GoogleAuth from "./google auth/GoogleAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLogin } from "../../hooks/Auth hooks/useLogin";
import { useIsLoggedIn } from "@/hooks/Auth hooks/useIsLoggedIn";

function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { isSubmitting, mutateLogin } = useLogin();
  const { data } = useIsLoggedIn();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    mutateLogin(data);
    reset();
  };

  if (data) return navigate("/");

  return (
    <>
      <div className=" m-4">
        <Link to={"/"} className=" btn-link flex">
          <IoIosArrowRoundBack className=" self-center size-4" />
          back to home page
        </Link>
        <div className="flex flex-col items-center m-auto card max-w-[30rem] mt-20 shadow-xl shadow-gray-300 bg-gray-50 p-6 lg:p-8 rounded-xl">
          <h1 className=" text-2xl lg:text-4xl mb-4 font-semibold">
            Log in to your account
          </h1>
          <GoogleAuth />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex w-full flex-col m-auto gap-4 align-middle"
          >
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-xl h-12 lg:h-14 rounded-xl"
                {...register("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full text-xl h-12 lg:h-14 rounded-xl"
                {...register("password")}
              />
            </div>
            <button
              className={`btn btn-primary h-12 lg:h-14 !rounded-xl !text-lg lg:!text-xl  mt-2 ${
                isSubmitting && "btn-disabled cursor-not-allowed"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader /> : "Sign In"}
            </button>
          </form>

          <p className=" mt-4">
            Dont have an account.
            <Link to={"/signup"} className="link link-info ml-1">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
