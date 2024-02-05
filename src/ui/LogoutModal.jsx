import { useLogout } from "../hooks/useLogout";

function LogoutModal() {
  const { isLoading: isLoggingOut, mutate } = useLogout();

  const onSubmit = () => {
    mutate();
  };

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are you sure you want to log out!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-ghost">
              Close
            </label>
            <button
              className="btn btn-primary"
              onClick={onSubmit}
              disabled={isLoggingOut}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LogoutModal;
