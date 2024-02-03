function LogoutModal() {
  return (
    <dialog id="logout_modal" className="modal ">
      <div className="modal-box border-white">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog" className=" flex gap-2">
            <button className="btn btn-ghost">Close</button>
            <button className="btn btn-primary">Sign out</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
export default LogoutModal;
