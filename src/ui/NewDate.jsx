import { MdOutlineDateRange } from "react-icons/md";

const currentDate = new Date();
const options = { day: "2-digit", month: "short", year: "numeric" };
const dateFormatter = new Intl.DateTimeFormat("en-US", options);

const formattedDate = dateFormatter.format(currentDate);

function NewDate() {
  return (
    <div className="badge font-sans self-center p-4 bg-white">
      <MdOutlineDateRange className=" h-4 w-4 mr-2" />
      {formattedDate}
    </div>
  );
}

export default NewDate;
