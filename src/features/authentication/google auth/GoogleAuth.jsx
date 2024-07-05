import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function GoogleAuth() {
  return (
    <div className="m-4 w-full">
      <Link
        to={"https://noteworthy-server-latest.onrender.com/auth/google"}
        data-tip="implement soon..."
        disabled={true}
        className="grid grid-cols-[auto,1fr] w-full h-10 lg:h-14 hover:bg-blue-500 shadow-xl shadow-[primary]/10 items-center p-1 btn bg-blue-600 text-white tooltip"
      >
        <FcGoogle className="size-6 bg-white h-full w-10 lg:w-12 px-2 rounded-lg" />
        Sign In With Google
      </Link>
      <div className=" text-center mt-4 text-xl font-normal text-gray-500">
        -OR-
      </div>
    </div>
  );
}

export default GoogleAuth;
