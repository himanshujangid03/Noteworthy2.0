import { motion } from "framer-motion";
import FolderDropdown from "./FolderDropdown";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function FolderItem({ item, i }) {
  const date = new Date(item.createdAt);
  const formatDate = date.toLocaleDateString();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: i * 0.2 }}
      className="card bg-slate-200 border-2 border-slate-300 rounded-3xl rounded-br-[2.5rem] shadow-gray-200 shadow-xl h-48 m-4 p-4 gap-4 flex "
    >
      <div className="flex flex-row items-center gap-10  ">
        <div className="tooltip tooltip-top" data-tip={item.name}>
          <h3 className=" text-4xl font-medium w-44 truncate self-start ">
            {item.name}
          </h3>
        </div>
        <FolderDropdown item={item} />
      </div>
      <p className="font-sans">Created at {formatDate}</p>
      <Link
        to={`/folder/${item._id}`}
        className="bg-black self-end btn-neutral absolute bottom-4 !rounded-full"
      >
        <HiOutlineArrowUpRight className=" h-6 w-6 m-3 hover:bg-gray-900 transition-all hover:translate-x-[2px] hover:translate-y-[-2px]" />
      </Link>
    </motion.div>
  );
}

export default FolderItem;
