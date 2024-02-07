import CreateNoteForm from "./CreateNoteForm";

function CreateNoteModal() {
  return (
    <>
      <input type="checkbox" id="create_note_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <CreateNoteForm />
        </div>
        <label className="modal-backdrop" htmlFor="create_note_modal"></label>
      </div>
    </>
  );
}

export default CreateNoteModal;
