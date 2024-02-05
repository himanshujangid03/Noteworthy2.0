import GoogleAuth from "./google auth/GoogleAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLogin } from "../../hooks/useLogin";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { isSubmitting, mutateLogin } = useLogin();

  const onSubmit = (data) => {
    mutateLogin(data);
  };

  return (
    <>
      <div className=" m-4">
        <Link className=" btn-link flex ">
          <IoIosArrowRoundBack className=" self-center h-4 w-4" />
          back to home page
        </Link>
        <div className="flex flex-col items-center m-auto card w-max mt-20 bg-gray-50 p-10 rounded-3xl">
          <h1 className=" text-4xl mb-4 font-semibold">
            Log in to your account
          </h1>
          <GoogleAuth />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col w-[25rem] m-auto gap-4 align-middle"
          >
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-[25rem]"
                {...register("email")}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-[25rem]"
                {...register("password")}
              />
            </div>
            <button className="btn btn-primary w-[25rem] mt-2">
              {isSubmitting ? <Loader /> : "Sign In"}
            </button>
          </form>
          <div className=" mt-4">
            <p>
              Dont have an account.
              <Link to={"/signup"} className="link link-info">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
