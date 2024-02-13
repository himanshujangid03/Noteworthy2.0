import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import LordIconArrow from "../../ui/LordIconArrow";

function FolderItem({ item, i }) {
  const date = new Date(item.createdAt);
  const formatDate = date.toLocaleDateString();

  return (
    <>
      <m.div
        layout
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateX: -10 }}
        transition={{ duration: 0.3, delay: i * 0.2 }}
        className="card bg-slate-200 border-2 border-slate-300 rounded-3xl rounded-br-[2.5rem] shadow-gray-300 shadow-2xl h-48 m-4 p-4 gap-4 flex "
      >
        <div className="tooltip tooltip-top" data-tip={item.name}>
          <h3 className=" text-4xl font-medium text-start truncate self-start ">
            {item.name}
          </h3>
        </div>
        <p className="font-sans">Created at {formatDate}</p>
        <Link
          to={`/folder/${item._id}`}
          className="bg-black self-end h-14 w-14 overflow-hidden btn-neutral rotate-[-40deg] absolute bottom-4 !rounded-full"
        >
          <LordIconArrow />
        </Link>
      </m.div>
    </>
  );
}

export default FolderItem;
