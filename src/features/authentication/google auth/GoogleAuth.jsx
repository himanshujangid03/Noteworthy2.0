import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const clientId =
  "322552807460-uome1uj2c3hcp77v8m4u2dqlq358e78d.apps.googleusercontent.com";

function GoogleAuth({ setGoogleData }) {
  const [credential, setCredential] = useState({});
  const submitHandler = async () => {
    const data = {
      name: credential.name,
      email: credential.email,
      profile: credential.picture,
    };
    setGoogleData(data);
  };

  return (
    <div className="m-4">
      <GoogleLogin
        className="flex w-[20rem] rounded-full items-center gap-2 btn bg-white"
        onSuccess={(credentialResponse) => {
          setCredential(jwtDecode(credentialResponse.credential));
          submitHandler();
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      >
        <FcGoogle className="w-[2rem] h-[2rem]" />
        Sign In With Google
      </GoogleLogin>
      <div className=" text-center m-4 text-xl font-semibold text-gray-500">
        -OR-
      </div>
    </div>
  );
}

export default GoogleAuth;
