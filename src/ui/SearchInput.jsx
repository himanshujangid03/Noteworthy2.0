import MotionDiv from "../Animation/MotionDiv";
import { CiSearch } from "react-icons/ci";
import SearchDocumentModal from "./SearchDocumentModal";
import { motion as m } from "framer-motion";

function SearchInput() {
  return (
    <>
      <MotionDiv className="ml-10">
        <m.div
          whileHover={{ y: -2, transition: { ease: "backIn" } }}
          className="p-2 bg-white grid grid-flow-col w-96 rounded-xl input-bordered cursor-pointer select-none "
          onClick={() => {
            document.getElementById("search_docs").showModal();
          }}
        >
          <CiSearch className=" h-6 w-6 self-center text-gray-600" />
          <p className="text-xl text-gray-600">Search for your documents...</p>
        </m.div>
      </MotionDiv>
      <SearchDocumentModal />
    </>
  );
}

export default SearchInput;
