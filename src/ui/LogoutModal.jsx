import { useGoogleLogout } from "../hooks/Auth hooks/useGoogleLogout";
import { useIsLoggedIn } from "../hooks/Auth hooks/useIsLoggedIn";
import { useLogout } from "../hooks/Auth hooks/useLogout";
import Loader from "./Loader";

function LogoutModal() {
  const { isLoading: isLoggingOut, mutateLogout } = useLogout();
  const { isPending, mutateGoogleLogout } = useGoogleLogout();
  const { mode } = useIsLoggedIn();

  const onSubmit = () => {
    if (mode === "google") {
      mutateGoogleLogout();
    }
    if (mode === "local") {
      mutateLogout();
    }
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
              {isLoggingOut || isPending ? (
                <>
                  <Loader />
                  Logging out...
                </>
              ) : (
                "Sign out"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LogoutModal;
