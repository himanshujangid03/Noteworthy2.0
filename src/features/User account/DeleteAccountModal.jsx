import { useDeleteUser } from "@/hooks/User hooks/useDeleteUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function DeleteAccountModal() {
  const [confirmInput, setConfirmInput] = useState("");
  const { handleSubmit } = useForm();
  const { mutate } = useDeleteUser();
  const navigate = useNavigate();

  const onSubmit = () => {
    mutate();
    navigate("/");
  };

  return (
    <>
      <dialog id="delete_account" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className=" flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Delete Account</h3>
            <p className="py-4 text-xl">
              This account will be deleted, along with all of its folders, notes
              and tasks.
            </p>
            <div className="lg:w-[90%] bg-red-200 rounded-xl p-3 text-xl px-4 text-red-800 font-medium">
              <span className="font-semibold mr-2">Warning:</span>This action is
              irreversible.
            </div>
            <div className="divider"></div>
            <form
              method="DELETE"
              onSubmit={handleSubmit(onSubmit)}
              className=" mt-2 flex flex-col gap-3 "
            >
              <p className="text-lg">
                To verify, type{" "}
                <span className="font-semibold">delete my account</span> below:
              </p>
              <input
                type="text"
                className="input input-bordered w-[90%] bg-gray-50 text-lg"
                value={confirmInput}
                onChange={(e) => setConfirmInput(e.target.value)}
              />
              <button
                disabled={confirmInput === "delete my account" ? false : true}
                className="btn self-end btn-error !rounded-xl mt-2"
              >
                Delete Account
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default DeleteAccountModal;
