import { Link, useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import CreateNoteModal from "./CreateNoteModal";

function NoteList({ notes }) {
  const { noteId } = useParams();

  return (
    <>
      <div>
        <div className=" card bg-white flex p-4 h-[80%]  ">
          <h1 className=" text-2xl text-center p-3 ">All notes</h1>
          <div className="overflow-y-scroll h-[30rem]">
            {notes?.map((note) => (
              <Link
                key={note._id}
                to={`${note._id}`}
                className={`p-4 m-0 hover:bg-gray-50  border-b-2 rounded-md flex justify-between transition-all ${
                  note._id === noteId ? "bg-accent" : ""
                }`}
              >
                <div className="flex">
                  <CiFileOn className=" text-primary self-center m-1 mr-3 h-8 w-8" />
                  <div>
                    <p className=" self-center text-lg">{note.title}</p>
                    <p className=" self-center text-sm text-gray-600">
                      {note.createdAt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="divider divider-neutral "></div>
          <label
            htmlFor="create_note_modal"
            className="btn w-[80%] self-center btn-neutral !rounded-full"
          >
            <IoIosAdd className=" h-8 w-8" />
            Add new note
          </label>
        </div>
      </div>
      <CreateNoteModal />
    </>
  );
}

export default NoteList;
