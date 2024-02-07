import { useLogout } from "../hooks/useLogout";
import Loader from "./Loader";

function LogoutModal() {
  const { isLoading: isLoggingOut, mutateLogout } = useLogout();

  const onSubmit = () => {
    mutateLogout();
  };

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <p className=" text-2xl font-semibold pb-8">
            Are you sure you want to log out!
          </p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-ghost">
              Close
            </label>
            <button
              className="btn btn-primary"
              onClick={onSubmit}
              disabled={isLoggingOut}
            >
              {isLoggingOut && <Loader />} Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LogoutModal;
