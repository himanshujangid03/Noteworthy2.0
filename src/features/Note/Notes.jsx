import NoteList from "./NoteList";
import { useNote } from "../../hooks/Notes hooks/useNote";
import { useParams } from "react-router";
import FolderDropdown from "../Folder/FolderDropdown";
import NoteContent from "@/ui/NoteContent";

function Notes() {
  const { notes } = useNote();
  const { noteId } = useParams();
  const currentNote = notes?.find((el) => el._id === noteId);

  return (
    <>
      <div className="h-full overflow-hidden  grid grid-flow-col grid-cols-[1fr,2fr] gap-4">
        <div className="grid grid-flow-row grid-rows-[auto,1fr] gap-2 ">
          <FolderDropdown />
          <NoteList notes={notes} />
        </div>
        <NoteContent currentNote={currentNote} />
        {/* <MotionPrimary
          delay={0.3}
          className="gap-4 rounded-xl card bg-white shadow-lg shadow-gray-400/40 p-6  "
        >
          <div className="grid grid-flow-col grid-cols-[1fr,auto] place-items-center">
            <h2 className=" text-center text-3xl grid my-2 capitalize w-max">
              {currentNote?.title}
            </h2>
            <NoteEdit />
          </div>
          <div className=" divider m-0"></div>
          <p className=" p-2 text-xl">{currentNote?.content}</p>
        </MotionPrimary> */}
      </div>
    </>
  );
}

export default Notes;
