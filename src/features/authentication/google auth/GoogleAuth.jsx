import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FcGoogle } from "react-icons/fc";

export const clientId =
  "377978048977-atj511k4tutgkd6foh1vr6toalh3dr2d.apps.googleusercontent.com";

function GoogleAuth() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(jwtDecode(tokenResponse.code)),
  });
  return (
    <div className="m-4">
      <button
        className="flex w-[20rem] rounded-full items-center gap-2 btn"
        onClick={() => login()}
      >
        <FcGoogle className="w-[2rem] h-[2rem]" />
        Sign In With Google
      </button>
      <div className=" text-center m-4 text-xl font-semibold text-gray-500">
        -OR-
      </div>
    </div>
  );
}

export default GoogleAuth;
