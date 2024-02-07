import FolderItem from "../features/Folder/FolderItem";
import FolderSkeleton from "../ui/FolderSkeleton";
import FailedToFetch from "../ui/FailedToFetch";
import CreateNewFolder from "../ui/CreateNewFolder";
import { useGetFolder } from "../hooks/useGetFolder";

function Folder() {
  const { data, isLoading, isLoadingError } = useGetFolder();

  return (
    <>
      <div>
        {!isLoadingError && (
          <div className=" flex justify-between">
            <h1 className=" text-5xl font-normal mb-4">My Folder</h1>
            <CreateNewFolder />
          </div>
        )}
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {isLoading && <FolderSkeleton />}
          {data?.map((item) => (
            <FolderItem key={item._id} item={item} />
          ))}
        </div>
        {isLoadingError && <FailedToFetch />}
      </div>
    </>
  );
}

export default Folder;
