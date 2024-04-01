import avatar from "../assets/avatar.webp";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import { useGetAvatar } from "../hooks/User hooks/useGetAvatar";
import { motion as m } from "framer-motion";

function Avatar({ position }) {
  const { data: supabaseData } = useGetAvatar();
  const { data: mongodbData } = useIsLoggedIn();

  if (position === "header")
    return (
      <div className="avatar self-end online">
        <div className=" rounded-full w-12">
          <img
            src={
              supabaseData || mongodbData
                ? `${mongodbData?.picture || supabaseData?.at(0)?.imageUrl}`
                : avatar
            }
          />
        </div>
      </div>
    );

  if (position === "profile")
    return (
      <>
        <div className="avatar self-center grid grid-flow-col gap-8 h-52">
          <div className=" rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2 w-44">
            <m.img
              layout="position"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, type: "spring" }}
              className=" aspect-auto"
              src={
                supabaseData || mongodbData
                  ? `${mongodbData?.picture || supabaseData?.at(0)?.imageUrl}`
                  : avatar
              }
            />
          </div>
        </div>
      </>
    );
}

export default Avatar;
