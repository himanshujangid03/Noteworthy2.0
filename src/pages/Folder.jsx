import { useQuery } from "@tanstack/react-query";
import getFolder from "../services/apiFolder";
import FolderItem from "../features/Folder/FolderItem";
import FolderSkeleton from "../ui/FolderSkeleton";
import FailedToFetch from "../ui/FailedToFetch";
import CreateNewFolder from "../ui/CreateNewFolder";

function Folder() {
  const { data, isLoading, isLoadingError } = useQuery({
    queryKey: ["folders"],
    queryFn: getFolder,
  });

  return (
    <>
      <div>
        {!isLoadingError && <h1 className=" text-5xl mb-4">My Folder</h1>}
        <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-4">
          {isLoading && <FolderSkeleton />}
          {data?.map((item) => (
            <FolderItem key={item._id} item={item} />
          ))}
        </div>
        {isLoadingError && <FailedToFetch />}
      </div>
      <CreateNewFolder />
    </>
  );
}

export default Folder;
