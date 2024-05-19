import NoteList from "./NoteList";
import { useNote } from "../../hooks/Notes hooks/useNote";
import { useParams } from "react-router";
import NoteEdit from "./NoteEdit";
import FolderDropdown from "../Folder/FolderDropdown";
import MotionPrimary from "../../Animation/MotionPrimary";

function Notes() {
  const { notes } = useNote();
  const { noteId } = useParams();
  const currentNote = notes?.find((el) => el._id === noteId);

  return (
    <>
      <div className=" overflow-hidden grid grid-flow-col grid-cols-[1fr,2fr] gap-4">
        <div className="grid grid-flow-row grid-rows-[auto,1fr] gap-2 ">
          <FolderDropdown />
          <NoteList notes={notes} />
        </div>
        <MotionPrimary
          delay={0.3}
          className=" p-6 gap-4 rounded-xl h-[80.5%] card bg-white shadow-lg shadow-gray-400/40"
        >
          <div className="grid grid-flow-col grid-cols-[1fr,auto] place-items-center">
            <h2 className=" text-center text-3xl grid m-0 capitalize w-max">
              {currentNote?.title}
            </h2>
            <NoteEdit />
          </div>
          <div className=" divider m-0"></div>
          <p className=" p-2 text-xl">{currentNote?.content}</p>
        </MotionPrimary>
      </div>
    </>
  );
}

export default Notes;
