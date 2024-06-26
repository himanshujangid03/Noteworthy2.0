import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CiFileOn } from "react-icons/ci";
import EditNoteModal from "./EditNoteModal";
import MobileEditNoteModal from "./MobileEditNoteModal";

const variant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function MobileNoteItem({ noteId, notes }) {
  return (
    <>
      <div className="h-min overflow-y-scroll lg:hidden flex-1">
        {notes?.map((note, i) => (
          <motion.div
            key={note._id}
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0, 0.71, 0.2, 1.05],
            }}
            className={` m-0 hover:bg-gray-50 border-b-2 border-gray-100 flex justify-between transition-all ${
              note._id === noteId ? "bg-accent" : ""
            }`}
          >
            <Link
              to={`${note._id}`}
              className="p-4 w-full"
              onClick={() =>
                document.getElementById("edit_note_mb").showModal()
              }
            >
              <div className="flex w-full gap-3">
                {note.emoji ? (
                  <span className=" self-center text-4xl">{note.emoji}</span>
                ) : (
                  <CiFileOn className=" text-primary self-center m-1 mr-3 h-8 w-8" />
                )}
                <div>
                  <p className=" self-center text-xl font-medium">
                    {note.title}
                  </p>
                  <p className=" self-center text-sm text-gray-600">
                    {note.createdAt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <MobileEditNoteModal />
    </>
  );
}

export default MobileNoteItem;
