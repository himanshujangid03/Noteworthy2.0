import FolderItem from "../features/Folder/FolderItem";
import FolderSkeleton from "../ui/FolderSkeleton";
import FailedToFetch from "../ui/FailedToFetch";
import CreateNewFolder from "../ui/CreateNewFolder";
import { useGetFolder } from "../hooks/Folder hooks/useGetFolder";
import MotionDiv from "../Animation/MotionDiv";
import { motion as m } from "framer-motion";
import { Outlet } from "react-router";

function Folder() {
  const { data, isLoading, isLoadingError } = useGetFolder();

  return (
    <>
      <div>
        {!isLoadingError && (
          <div className=" flex flex-col overflow-hidden mb-6">
            <m.h1
              initial={{ y: "100px" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                ease: "circOut",
              }}
              className=" text-6xl self-center"
            >
              My Folder
            </m.h1>
          </div>
        )}
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
