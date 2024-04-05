import MotionDiv from "../../Animation/MotionDiv";
import { motion as m } from "framer-motion";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import Avatar from "../../ui/Avatar";
import ChangeAvatarForm from "../../ui/ChangeAvatarForm";

function AvatarComponent() {
  const { data, mode } = useIsLoggedIn();
  return (
    <>
      <MotionDiv className="p-4 pt-6 flex flex-col gap-4 rounded-2xl">
        <div className=" overflow-hidden">
          <m.h1
            initial={{ y: "100px" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="text-6xl font-extrabold  text-gray-400/90 text-center pl-4"
          >
            User Profile
          </m.h1>
        </div>
        <div className="flex gap-8">
          <Avatar position="profile" />
          <div className=" self-center flex flex-col gap-2">
            <p className=" text-4xl">{data?.name}</p>
            <label
              htmlFor="change_profile"
              className={`link link-info ${mode === "google" && "invisible "}`}
            >
              Edit profile
            </label>
          </div>
        </div>
      </MotionDiv>
      <ChangeAvatarForm />
    </>
  );
}

export default AvatarComponent;
