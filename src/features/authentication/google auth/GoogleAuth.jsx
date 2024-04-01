import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function GoogleAuth() {
  return (
    <div className="m-4">
      <Link
        to={"http://localhost:4000/auth/google"}
        className="flex w-[20rem] rounded-full hover:bg-gray-50 shadow-xl shadow-gray-200 items-center gap-2 btn bg-white"
      >
        <FcGoogle className="w-6 h-6" />
        Sign In With Google
      </Link>
      <div className=" text-center m-4 text-xl font-normal text-gray-500">
        -OR-
      </div>
    </div>
  );
}

export default GoogleAuth;
