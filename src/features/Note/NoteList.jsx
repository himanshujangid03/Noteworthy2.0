import { Link, useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import CreateNoteModal from "./CreateNoteModal";
import { motion } from "framer-motion";
import MotionPrimary from "../../Animation/MotionPrimary";

function NoteList({ notes }) {
  const { noteId } = useParams();

  return (
    <>
      <MotionPrimary
        delay={0.2}
        className=" card rounded-3xl bg-white flex p-4 h-[70%] shadow-xl shadow-gray-200  "
      >
        <h1 className=" text-2xl text-center p-3 ">All notes</h1>
        <div className="overflow-y-scroll h-[30rem]">
          {notes?.map((note, i) => (
            <motion.div
              key={note._id}
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
              className={` m-0 hover:bg-gray-50  border-b-2 rounded-md flex justify-between transition-all ${
                note._id === noteId ? "bg-accent" : ""
              }`}
            >
              <Link to={`${note._id}`} className="p-4">
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
            </motion.div>
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
      </MotionPrimary>
      <CreateNoteModal />
    </>
  );
}

export default NoteList;
