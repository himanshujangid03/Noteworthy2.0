import { FaRegCircleCheck } from "react-icons/fa6";
import { useGetActivityLog } from "../hooks/Activity hooks/useGetActivityLog";

function ActivityFilter() {
  const { data } = useGetActivityLog();
  const filterData = data?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <div className="flex flex-col gap-6  self-stretch">
      <div className="h-full ">
        <div className=" w-full bg-black text-xl text-gray-300 grid grid-flow-col grid-cols-3 p-4 rounded-t-2xl ">
          <p className="w-full pl-4">Name</p>
          <p className="w-full pl-4">Action</p>
          <p className="w-full pl-4">Modified At</p>
        </div>
        <div className="bg-white h-full pt-2 ">
          {filterData?.map((item, i) => (
            <div
              key={i}
              className="w-full  grid grid-flow-col grid-cols-3 p-2 text-xl border-b-2 border-gray-200"
            >
              <p className="w-full pl-4 self-center">
                <span className="text-2xl mr-2">
                  {item?.emoji ? item.emoji : "📂"}
                </span>
                {item.name}
              </p>
              <p className="w-full pl-4 p-2">
                <span
                  className={`${
                    item?.action === "Update" && "bg-orange-100 text-orange-500"
                  } ${
                    item?.action === "Create" && " bg-green-100 text-green-600"
                  } ${
                    item?.action === "Delete" && "bg-red-100 text-red-500"
                  } flex w-min gap-2 font-semibold p-2 px-6 rounded-full`}
                >
                  <FaRegCircleCheck className=" self-center" />
                  {item?.action === "Update" && "Update"}
                  {item?.action === "Create" && "Create"}
                  {item?.action === "Delete" && "Delete"}
                </span>
              </p>
              <p className="w-full pl-4 self-center">{item.updatedAt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFilter;
