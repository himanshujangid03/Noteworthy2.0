import { FcGoogle } from "react-icons/fc";

function GoogleAuth() {
  return (
    <div className="mt-20">
      <button className="flex w-[20rem] rounded-full items-center gap-2 btn">
        <FcGoogle className="w-[2rem] h-[2rem]" />
        Sign In With Google
      </button>
      <div className=" text-center m-8 text-xl font-semibold text-gray-500">
        -OR-
      </div>
    </div>
  );
}

export default GoogleAuth;
