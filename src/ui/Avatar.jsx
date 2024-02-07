import avatar from "../assets/avatar.webp";

function Avatar({ position }) {
  if (position === "header")
    return (
      <div className="avatar self-end online">
        <div className=" rounded-full w-12">
          <img src={avatar} />
        </div>
      </div>
    );

  if (position === "profile")
    return (
      <div className="avatar self-center ">
        <div className=" rounded-full ring ring-indigo-500 ring-offset-base-100 ring-offset-2 w-44">
          <img src={avatar} />
        </div>
      </div>
    );
}

export default Avatar;
