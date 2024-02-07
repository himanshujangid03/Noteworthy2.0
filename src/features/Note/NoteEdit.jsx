import { PiTrashSimpleLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import EditNoteModal from "./EditNoteModal";
import DeleteNoteModal from "./DeleteNoteModal";

function NoteEdit() {
  return (
    <>
      <div className=" w-44 flex gap-3 justify-end">
        <button
          className="btn btn-sm btn-square btn-ghost"
          onClick={() => document.getElementById("edit_note").showModal()}
        >
          <CiEdit className=" h-6 w-6" />
        </button>
        <button
          className="btn btn-sm btn-square btn-ghost"
          onClick={() => document.getElementById("delete_note").showModal()}
        >
          <PiTrashSimpleLight className=" h-6 w-6" />
        </button>
      </div>
      <EditNoteModal />
      <DeleteNoteModal />
    </>
  );
}

export default NoteEdit;
