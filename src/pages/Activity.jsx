import PageHeading from "@/ui/PageHeading";
import ActivityFilter from "../ui/ActivityFilter";

function Activity() {
  return (
    <div className=" max-w-full p-1 lg:pb-1 pb-10">
      <PageHeading heading="Activity" />
      <ActivityFilter />
    </div>
  );
}

export default Activity;
