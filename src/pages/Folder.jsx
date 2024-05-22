import FolderItem from "../features/Folder/FolderItem";
import FolderSkeleton from "../ui/FolderSkeleton";
import FailedToFetch from "../ui/FailedToFetch";
import CreateNewFolder from "../ui/CreateNewFolder";
import { useGetFolder } from "../hooks/Folder hooks/useGetFolder";
import MotionDiv from "../Animation/MotionDiv";
import PageHeading from "../ui/PageHeading";

function Folder() {
  const { data, isLoading, isLoadingError } = useGetFolder();

  return (
    <>
      <div>
        {!isLoadingError && <PageHeading heading={"My Folder"} />}
        <MotionDiv className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
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
