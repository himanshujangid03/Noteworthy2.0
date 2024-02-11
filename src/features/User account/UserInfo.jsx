import { useForm } from "react-hook-form";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import Avatar from "../../ui/Avatar";
import MotionDiv from "../../Animation/MotionDiv";
import ChangeAvatarForm from "../../ui/ChangeAvatarForm";
import { useGetAvatar } from "../../hooks/User hooks/useGetAvatar";

function UserInfo() {
  const { data: image } = useGetAvatar();
  const { register, handleSubmit } = useForm();
  const { data } = useIsLoggedIn();

  function onSubmit() {}
  return (
    <>
      <MotionDiv className="px-6 py-10 ">
        <div className=" flex flex-col gap-4">
          <div className=" self-center flex gap-4">
            <Avatar position="profile" />
            <label
              htmlFor="change_profile"
              className="btn btn-sm btn-outline self-center !text-sm w-24"
            >
              Edit profile
            </label>
          </div>
          <form
            className=" flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input input-md text-xl w-72 bg-transparent input-bordered "
                {...register("name", { required: "This field is required" })}
                defaultValue={data?.name}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="email">
                Email
              </label>
              <div className="input input-md text-xl w-96 bg-slate-300 flex ">
                <p className=" self-center text-gray-500">{data?.email}</p>
              </div>
            </div>
            <button className="btn btn-primary self-end w-44">
              Update profile
            </button>
          </form>
        </div>
      </MotionDiv>
      <ChangeAvatarForm />
    </>
  );
}

export default UserInfo;
