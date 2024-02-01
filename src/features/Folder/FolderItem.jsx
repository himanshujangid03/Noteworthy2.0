import { IoMdFolder } from "react-icons/io";
import FolderDropdown from "../../ui/FolderDropdown";

function FolderItem({ item }) {
  const date = new Date(item.createdAt);
  const formatDate = date.toLocaleDateString();

 
  return (
    <div className="card bg-slate-200 shadow-md min-w-max h-48 m-4 p-4 gap-5 ">
      <div className="flex items-center gap-10 min-w-max justify-between">
        <>
          <div className=" flex gap-2">
            <IoMdFolder className=" h-8 w-8" />
            <h3 className=" text-2xl font-semibold">{item.name}</h3>
          </div>
        </>
        <FolderDropdown />
      </div>
      <p>Created at {formatDate}</p>
    </div>
  );
}

export default FolderItem;
