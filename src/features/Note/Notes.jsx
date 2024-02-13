import NoteList from "./NoteList";
import { useNoteFromFolder } from "../../hooks/Notes hooks/useNoteFromFolder";
import { useParams } from "react-router";
import NoteEdit from "./NoteEdit";
import FolderDropdown from "../Folder/FolderDropdown";
import MotionPrimary from "../../Animation/MotionPrimary";

function Notes() {
  const { notes } = useNoteFromFolder();
  const { noteId } = useParams();
  const currentNote = notes?.find((el) => el._id === noteId);

  return (
    <>
      <div className="p-2 gap-4 h-full overflow-hidden grid grid-flow-col grid-cols-[1fr,2fr]">
        <div className="grid grid-flow-row grid-rows-[auto,1fr] gap-2">
          <FolderDropdown />
          <NoteList notes={notes} />
        </div>
        <MotionPrimary
          delay={0.5}
          className=" p-4 gap-4 card rounded-3xl bg-white h-[75%] shadow-xl shadow-gray-200"
        >
          <div className="grid grid-flow-col grid-cols-[1fr,auto] place-items-center">
            <h2 className=" text-center text-3xl grid m-0 capitalize w-max">
              {!currentNote ? notes?.at(0)?.title : currentNote?.title}
            </h2>
            <NoteEdit />
          </div>
          <div className=" divider m-0"></div>
          <p className=" p-2 text-xl">
            {!currentNote ? notes?.at(0)?.content : currentNote?.content}
          </p>
        </MotionPrimary>
      </div>
    </>
  );
}

export default Notes;
