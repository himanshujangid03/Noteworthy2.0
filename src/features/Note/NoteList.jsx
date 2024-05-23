import { useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import CreateNoteModal from "./CreateNoteModal";
import MotionPrimary from "../../Animation/MotionPrimary";
import NoteItem from "../../ui/NoteItem";

function NoteList({ notes }) {
  const { noteId } = useParams();
  console.log(notes);

  return (
    <>
      <MotionPrimary
        delay={0.2}
        className=" bg-white flex flex-col p-4 rounded-xl shadow-lg shadow-gray-400/40"
      >
        <h1 className=" text-2xl text-center p-3 ">All notes</h1>
        <NoteItem noteId={noteId} notes={notes} />
        <div className="divider divider-neutral "></div>
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
