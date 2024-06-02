import FolderItem from "../features/Folder/FolderItem";
import FolderSkeleton from "../ui/FolderSkeleton";
import FailedToFetch from "../ui/FailedToFetch";
import CreateNewFolder from "../ui/CreateNewFolder";
import { useGetFolder } from "../hooks/Folder hooks/useGetFolder";
import MotionDiv from "../Animation/MotionDiv";

function Folder() {
  const { data, isLoading, isLoadingError } = useGetFolder();

  return (
    <>
      <div className="h-full">
        <MotionDiv className=" grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1">
          {isLoading && <FolderSkeleton />}
          {data?.map((item, i) => (
            <FolderItem key={item._id} item={item} i={i} />
          ))}
        </MotionDiv>
        <CreateNewFolder />
        {isLoadingError && <FailedToFetch />}
      </div>
    </>
  );
}

export default Folder;
