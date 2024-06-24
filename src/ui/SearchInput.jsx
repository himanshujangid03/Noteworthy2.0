import MotionDiv from "../Animation/MotionDiv";
import { CiSearch } from "react-icons/ci";
import SearchDocumentModal from "./SearchDocumentModal";
import { motion as m } from "framer-motion";

function SearchInput() {
  return (
    <>
      <MotionDiv className="ml-7 ">
        <m.div
          whileHover={{ y: -2, transition: { ease: "backIn" } }}
          className="py-3 px-4 bg-base-200/50 grid grid-flow-col lg:w-96 w-max rounded-xl input-bordered cursor-pointer select-none lg:shadow-xl shadow-gray-200"
          onClick={() => {
            document.getElementById("search_docs").showModal();
          }}
        >
          <CiSearch className=" size-6 self-center mr-4 text-gray-800" />
          <p className="text-xl text-gray-800">Search for your documents...</p>
        </m.div>
      </MotionDiv>
      <SearchDocumentModal />
    </>
  );
}

export default SearchInput;
