import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSignup } from "../../hooks/Auth hooks/useSignup";

function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const { isSubmitting, mutateSignup } = useSignup();

  const onSubmit = (data) => {
    mutateSignup(data);
  };
  return (
    <div className=" m-4">
      <Link className=" btn-link flex ">
        <IoIosArrowRoundBack className=" self-center h-4 w-4" />
        back to home page
      </Link>
      <div className="flex flex-col items-center m-auto card w-max mt-20 bg-gray-50 p-10 rounded-3xl">
        <h1 className=" text-4xl mb-4 font-semibold">Create new account</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-[25rem] m-auto gap-4 align-middle"
        >
          <div>
            <input
              type="name"
              placeholder="Enter your name"
              className="input input-bordered w-[25rem]"
              {...register("name")}
            />
          </div>
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
              className="input text-4xl input-bordered w-[25rem]"
              {...register("password")}
            />
          </div>
          <button
            className={`btn btn-primary w-[25rem] mt-2 ${
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
