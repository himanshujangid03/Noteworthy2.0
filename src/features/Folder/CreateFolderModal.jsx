import CreateFolderForm from "./CreateFolderForm";

function CreateFolderModal() {
  return (
    <>
      <input
        type="checkbox"
        id="create_folder_modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <CreateFolderForm />
        </div>
        <label className="modal-backdrop" htmlFor="create_folder_modal"></label>
      </div>
    </>
  );
}

export default CreateFolderModal;
