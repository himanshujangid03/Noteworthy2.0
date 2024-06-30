import MotionDiv from "../../Animation/MotionDiv";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import Avatar from "../../ui/Avatar";
import ChangeAvatarForm from "../../ui/ChangeAvatarForm";
import PageHeading from "../../ui/PageHeading";

function AvatarComponent() {
  const { data, mode } = useIsLoggedIn();
  console.log(mode);
  return (
    <>
      <MotionDiv className="p-4 pt-6 flex  flex-col gap-4 rounded-2xl">
        <PageHeading heading={"User Profile"} />
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-3">
          <Avatar position="profile" />
          <div className=" self-center flex flex-col gap-2">
            <p className=" text-2xl lg:text-4xl">{data?.name}</p>
            <label
              htmlFor="change_profile"
              className={`link link-info ${mode === "google" && "invisible "} text-xl self-start`}
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
