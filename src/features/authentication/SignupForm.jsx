import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSignup } from "../../hooks/Auth hooks/useSignup";
import GoogleAuth from "./google auth/GoogleAuth";

function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const { isSubmitting, mutateSignup } = useSignup();

  const onSubmit = (data) => {
    mutateSignup(data);
  };
  return (
    <div className=" m-2">
      <Link className=" btn-link flex ">
        <IoIosArrowRoundBack className=" self-center size-4" />
        back to home page
      </Link>
      <div className="flex flex-col max-w-[30rem] items-center m-auto card w-max mt-20 bg-gray-50 p-10 rounded-3xl">
        <h1 className=" text-4xl mb-4 font-semibold">Create new account</h1>
        <GoogleAuth />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-full m-auto gap-4 align-middle"
        >
          <div>
            <input
              type="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="input text-4xl input-bordered w-full"
              {...register("password")}
            />
          </div>
          <button
            className={`btn btn-primary w-full mt-2 ${
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
            <Link to={"/login"} className="link link-info">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
