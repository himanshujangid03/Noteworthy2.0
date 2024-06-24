import { useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import CreateNoteModal from "./CreateNoteModal";
import MotionPrimary from "../../Animation/MotionPrimary";
import NoteItem from "../../ui/NoteItem";

function NoteList({ notes }) {
  const { noteId } = useParams();

  return (
    <>
      <MotionPrimary
        delay={0.2}
        className=" flex-1 bg-white overflow-y-scroll flex flex-col p-4 rounded-xl h-full shadow-lg shadow-gray-400/40"
      >
        <h1 className=" text-2xl text-center p-3 ">All notes</h1>
        <NoteItem noteId={noteId} notes={notes} />
        <div className="divider"></div>
        <label
          htmlFor="create_note_modal"
          className="btn w-[80%] self-center btn-neutral !rounded-full"
        >
          <IoIosAdd className=" h-8 w-8" />
          Add new note
        </label>
      </MotionPrimary>
      <CreateNoteModal />
    </>
  );
}

export default NoteList;
