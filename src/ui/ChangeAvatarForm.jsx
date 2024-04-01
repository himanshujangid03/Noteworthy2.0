import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useUpdateAvatar } from "../hooks/User hooks/useUpdateAvatar";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import Loader from "./Loader";

function ChangeAvatarForm() {
  const { register, handleSubmit } = useForm();
  const { email, mode } = useIsLoggedIn();
  const { isUploading, mutate } = useUpdateAvatar();
  const onSubmit = (data) => {
    if (mode === "google") return;
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const updatedData = { ...data, email, image: image };
    mutate(updatedData);
  };

  return (
    <>
      <input type="checkbox" id="change_profile" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h1 className=" text-3xl font-medium text-center m-2">
            Update profile picture
          </h1>
          <form
            className=" h-56 w-full flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              type="button"
              htmlFor="image"
              className={`h-44  border-4 rounded-xl border-dashed border-stone-300 mt-2 p-4`}
            >
              <div className=" flex flex-col h-full justify-between">
                <IoCloudUploadOutline className=" self-center h-14 w-14 m-2 text-gray-500" />
                <p className="self-center text-xl font-semibold text-sky-950">
                  Drop you image here or,
                  <span className=" text-sky-500 ml-2">browse</span>
                </p>
                <p className="self-center m-2"></p>
              </div>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="hidden"
              {...register("image", {
                required: "This field is required",
              })}
            />
            <button
              className={`btn btn-primary self-center mt-4 ${
                isUploading && " btn-disabled"
              }`}
            >
              {isUploading ? <Loader /> : "Update profile"}
            </button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="change_profile"></label>
      </div>
    </>
  );
}

export default ChangeAvatarForm;
