import PageHeading from "@/ui/PageHeading";
import ActivityFilter from "../ui/ActivityFilter";

function Activity() {
  return (
    <div className=" h-full max-w-full p-4">
      <PageHeading heading="Activity" />
      <ActivityFilter />
    </div>
  );
}

export default Activity;
