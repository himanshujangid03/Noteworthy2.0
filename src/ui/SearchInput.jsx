import MotionDiv from "../Animation/MotionDiv";

function SearchInput() {
  return (
    <MotionDiv className="flex ml-10 flex-col justify-center">
      <input
        className="input bg-accent  w-72 rounded-xl input-bordered"
        placeholder="Search"
        type="text"
      />
    </MotionDiv>
  );
}

export default SearchInput;
