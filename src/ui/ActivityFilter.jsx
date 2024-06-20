import { FaRegCircleCheck } from "react-icons/fa6";
import { useGetActivityLog } from "../hooks/Activity hooks/useGetActivityLog";
import { CiCalendar } from "react-icons/ci";
import { FormattedDate } from "./formattedDate";

function ActivityFilter() {
  const { data } = useGetActivityLog();
  const filterData = data?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <div className="flex flex-col gap-6  self-stretch p-4">
      <div className="h-full ">
        <div className=" w-full bg-black text-xl text-gray-300 grid grid-flow-col grid-cols-3 p-4 rounded-t-2xl ">
          <p className="w-full pl-4">Name</p>
          <p className="w-full pl-4">Action</p>
          <p className="w-full pl-4">Modified At</p>
        </div>
        <div className=" h-full pt-2 bg-white/40 rounded-b-2xl">
          {filterData?.map((item, i) => (
            <div
              key={i}
              className="w-full grid grid-flow-col grid-cols-3 p-2 text-xl border-b-2 border-gray-300"
            >
              <p className="w-full pl-4 self-center font-medium">
                <span className="text-2xl  mr-2">
                  {item?.emoji ? item.emoji : "📂"}
                </span>
                {item.name}
              </p>
              <p className="w-full">
                <span
                  className={`${
                    item?.action === "Update" && " text-orange-500"
                  } ${item?.action === "Create" && "  text-green-600"} ${
                    item?.action === "Delete" && " text-red-500"
                  } flex w-min gap-2 font-semibold p-2 px-6 rounded-full`}
                >
                  <FaRegCircleCheck className=" self-center" />
                  {item?.action === "Update" && "Update"}
                  {item?.action === "Create" && "Create"}
                  {item?.action === "Delete" && "Delete"}
                </span>
              </p>
              <p className="w-full flex flex-row gap-3 pl-4 font-medium text-gray-500 self-center">
                <CiCalendar className="size-6" />
                <FormattedDate date={item?.updatedAt} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFilter;
