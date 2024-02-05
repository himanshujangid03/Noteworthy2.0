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
          <h1 className=" text-5xl font-semibold mb-4">My Folder</h1>
        )}
        <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-4">
          {isLoading && <FolderSkeleton />}
          {data?.map((item) => (
            <FolderItem key={item._id} item={item} />
          ))}
        </div>
        {isLoadingError && <FailedToFetch />}
      </div>
      {!isLoadingError && <CreateNewFolder />}
    </>
  );
}

export default Folder;
