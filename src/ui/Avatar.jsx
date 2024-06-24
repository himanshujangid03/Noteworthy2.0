import avatar from "../assets/avatar.webp";
import { useGetAvatar } from "../hooks/User hooks/useGetAvatar";
import { motion as m } from "framer-motion";

function Avatar({ position }) {
  const { data: supabaseData } = useGetAvatar();

  if (position === "header")
    return (
      <div className="avatar self-end online">
        <div className=" rounded-full ring-1 ring-primary w-12">
          <img src={supabaseData?.at(0)?.imageUrl || avatar} />
        </div>
      </div>
    );

  if (position === "profile")
    return (
      <>
        <div className="avatar self-center grid grid-flow-col gap-8 h-52">
          <div
            className={` rounded-full ring ring-primary ring-offset-4 w-44 ${supabaseData ? " scale-100" : " scale-110"}`}
          >
            <m.img
              layout="position"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, type: "spring" }}
              className=" aspect-auto"
              src={supabaseData?.at(0)?.imageUrl || avatar}
            />
          </div>
        </div>
      </>
    );
}

export default Avatar;
