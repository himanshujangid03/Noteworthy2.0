import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import StaggerMotion from "../../Animation/StaggerMotion";
import { FormattedDate } from "@/ui/formattedDate";

function FolderItem({ item, i }) {
  return (
    <>
      <StaggerMotion
        i={i}
        className="card bg-gradient-to-br from-gray-100 to-slate-200 ring-1 ring-slate-300 rounded-3xl rounded-br-[2.5rem] shadow-gray-300 shadow-2xl h-48 m-4 p-5 gap-4 flex justify-between"
      >
        <div className="tooltip tooltip-top" data-tip={item.name}>
          <h3 className=" text-4xl font-medium text-start truncate self-start ">
            {item.name}
          </h3>
        </div>
        <p className="font-sans">
          Created at <FormattedDate date={item.createdAt} />
        </p>
        <Link
          to={`/folder/${item._id}`}
          className="bg-black self-end h-14 w-14 overflow-hidden btn-neutral !rounded-full grid place-content-center"
        >
          <FiArrowUpRight className="size-8 text-white" />
        </Link>
      </StaggerMotion>
    </>
  );
}

export default FolderItem;
