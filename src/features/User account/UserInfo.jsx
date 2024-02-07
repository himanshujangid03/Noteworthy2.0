import { useForm } from "react-hook-form";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";
import Avatar from "../../ui/Avatar";

function UserInfo() {
  const { register, handleSubmit } = useForm();
  const { data } = useIsLoggedIn();

  function onSubmit() {}
  return (
    <div className="bg-slate-200 rounded-2xl px-6 py-10 ">
      <div className=" flex flex-col gap-4">
        <Avatar position="profile" />
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
    </div>
  );
}

export default UserInfo;
