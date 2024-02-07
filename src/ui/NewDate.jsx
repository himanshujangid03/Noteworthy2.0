import { CiCalendarDate } from "react-icons/ci";

const currentDate = new Date();
const options = { day: "2-digit", month: "short", year: "numeric" };
const dateFormatter = new Intl.DateTimeFormat("en-US", options);

const formattedDate = dateFormatter.format(currentDate);

function NewDate() {
  return (
    <div className="badge font-sans self-center p-4 bg-white">
      <CiCalendarDate className=" h-5 w-5 mr-2" />
      {formattedDate}
    </div>
  );
}

export default NewDate;
