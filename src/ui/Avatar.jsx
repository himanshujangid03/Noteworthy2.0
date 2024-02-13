import avatar from "../assets/avatar.webp";
import { useGetAvatar } from "../hooks/User hooks/useGetAvatar";

function Avatar({ position }) {
  const { data } = useGetAvatar();

  if (position === "header")
    return (
      <div className="avatar self-end online">
        <div className=" rounded-full w-12">
          <img src={data ? `${data?.at(0)?.imageUrl}` : avatar} />
        </div>
      </div>
    );

  if (position === "profile")
    return (
      <>
        <div className="avatar self-center grid grid-flow-col gap-8 h-52">
          <div className=" rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2 w-44">
            <img
              src={data?.length === 0 ? avatar : `${data?.at(0)?.imageUrl}`}
            />
          </div>
        </div>
      </>
    );
}

export default Avatar;
