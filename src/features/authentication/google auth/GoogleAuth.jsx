import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function GoogleAuth() {
  return (
    <div className="m-4 w-full">
      <Link
        to={"http://localhost:8000/auth/google"}
        className="flex w-full h-10 lg:h-14 hover:bg-gray-50 shadow-xl ring-1 ring-primary shadow-[primary]/10 items-center gap-2 btn bg-white"
      >
        <FcGoogle className="w-6 h-6" />
        Sign In With Google
      </Link>
      <div className=" text-center mt-4 text-xl font-normal text-gray-500">
        -OR-``
      </div>
    </div>
  );
}

export default GoogleAuth;
