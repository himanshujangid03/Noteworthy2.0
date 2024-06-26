import { PiTrashSimpleLight } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import EditNoteModal from "./EditNoteModal";
import DeleteNoteModal from "./DeleteNoteModal";

function NoteEdit() {
  return (
    <>
      <div className="flex gap-3 justify-end h-full">
        <button
          className="btn btn-sm btn-square btn-ghost px-2"
          onClick={() => document.getElementById("edit_note").showModal()}
        >
          <CiEdit className=" size-7" />
        </button>
        <button
          className="btn btn-sm btn-square btn-ghost"
          onClick={() => document.getElementById("delete_note").showModal()}
        >
          <PiTrashSimpleLight className="size-full" />
        </button>
      </div>

      <EditNoteModal />

      <DeleteNoteModal />
    </>
  );
}

export default NoteEdit;
