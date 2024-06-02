import CreateTaskForm from "./CreateTaskForm";

function CreateTaskModal() {
  return (
    <>
      <input
        type="checkbox"
        id="create_task_modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <CreateTaskForm />
        </div>
        <label className="modal-backdrop" htmlFor="create_task_modal"></label>
      </div>
    </>
  );
}

export default CreateTaskModal;
