import MotionDiv from "../Animation/MotionDiv";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  return (
    <MotionDiv className="ml-10">
      <div className="input bg-accent  w-96 rounded-xl input-bordered flex">
        <CiSearch className=" h-6 w-6 self-center text-gray-600" />
        <input
          className="input bg-transparent outline-none border-none text-xl  w-72"
          placeholder="Search for your documents..."
          type="text"
        />
      </div>
    </MotionDiv>
  );
}

export default SearchInput;
