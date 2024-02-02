import FolderDropdown from "../../ui/FolderDropdown";

function FolderItem({ item }) {
  const date = new Date(item.createdAt);
  const formatDate = date.toLocaleDateString();

  return (
    <div className="card bg-slate-200 rounded-3xl  shadow-md min-w-max h-48 m-4 p-4 gap-4 ">
      <div className="flex items-center gap-10 min-w-max justify-between">
        <h3 className=" text-2xl font-semibold">{item.name}</h3>
        <FolderDropdown item={item} />
      </div>
      <p className="font-sans">Created at {formatDate}</p>
    </div>
  );
}

export default FolderItem;
