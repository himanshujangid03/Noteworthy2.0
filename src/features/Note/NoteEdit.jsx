import { PiTrashSimpleLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import EditNoteModal from "./EditNoteModal";
import DeleteNoteModal from "./DeleteNoteModal";

function NoteEdit() {
  return (
    <>
      <div className=" w-44 flex">
        <button
          className="btn"
          onClick={() => document.getElementById("edit_note").showModal()}
        >
          <CiEdit className=" h-8 w-8" />
        </button>
        <button
          className="btn"
          onClick={() => document.getElementById("delete_note").showModal()}
        >
          <PiTrashSimpleLight className=" h-8 w-8" />
        </button>
      </div>
      <EditNoteModal />
      <DeleteNoteModal />
    </>
  );
}

export default NoteEdit;
