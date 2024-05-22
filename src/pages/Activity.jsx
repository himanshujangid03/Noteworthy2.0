import ActivityFilter from "../ui/ActivityFilter";
import PageHeading from "../ui/PageHeading";

function Activity() {
  return (
    <div className=" h-full grid grid-flow-row grid-rows-[auto,1fr]">
      <PageHeading heading={"Activity"} />
      <ActivityFilter />
    </div>
  );
}

export default Activity;
