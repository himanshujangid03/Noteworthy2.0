import { Link } from "react-router-dom";
import LordIconArrow from "../../ui/LordIconArrow";
import StaggerMotion from "../../Animation/StaggerMotion";

function FolderItem({ item, i }) {
  const date = new Date(item.createdAt);
  const formatDate = date.toLocaleDateString();

  return (
    <>
      <StaggerMotion
        i={i}
        className="card bg-gradient-to-br from-gray-100 to-slate-200 border-2 border-slate-300 rounded-3xl rounded-br-[2.5rem] shadow-gray-300 shadow-2xl h-48 m-4 p-4 gap-4 flex "
      >
        <div className="tooltip tooltip-top" data-tip={item.name}>
          <h3 className=" text-4xl font-medium text-start truncate self-start ">
            📂 {item.name}
          </h3>
        </div>
        <p className="font-sans">Created at {formatDate}</p>
        <Link
          to={`/folder/${item._id}`}
          className="bg-black self-end h-12 w-12 overflow-hidden btn-neutral rotate-[-40deg] absolute bottom-4 !rounded-full"
        >
          <LordIconArrow />
        </Link>
      </StaggerMotion>
    </>
  );
}

export default FolderItem;
