import { useForm } from "react-hook-form";
import { useIsLoggedIn } from "../../hooks/Auth hooks/useIsLoggedIn";
import MotionDiv from "../../Animation/MotionDiv";
import { useUpdateName } from "@/hooks/User hooks/useUpdateName";

function UserInfo() {
  const { register, handleSubmit, watch } = useForm();
  const { data } = useIsLoggedIn();
  const { mutate, isLoading } = useUpdateName();
  const nameInput = watch("name");

  function onSubmit(data) {
    const proceed = window.confirm(
      `Are you sure you want to update the name to ${nameInput}`
    );
    if (proceed) {
      mutate(data);
    }
    return;
  }
  return (
    <>
      <MotionDiv className="py-2 rounded-2xl">
        <div className="flex flex-col gap-6 ">
          <form
            className="flex flex-col lg:flex-row gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label className=" text-xl font-medium" htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                className="input input-md rounded-xl text-xl w-72 bg-transparent input-bordered "
                {...register("name", { required: "This field is required" })}
                defaultValue={data?.name}
              />
            </div>
            <button
              className={`btn btn-outline btn-neutral text-gray-900 hover:text-gray-300 self-start lg:self-end
              }`}
              disabled={data?.name === nameInput ? true : false}
            >
              {isLoading ? "Updating..." : "Update name"}
            </button>
          </form>
          <div className=" flex flex-col gap-2">
            <label className=" text-xl font-medium" htmlFor="email">
              Email
            </label>
            <div className="input input-md text-xl lg:w-96 bg-slate-300 flex ">
              <p className=" self-center text-gray-600">{data?.email}</p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </>
  );
}

export default UserInfo;
