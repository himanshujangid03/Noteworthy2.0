import MotionDiv from "../../Animation/MotionDiv";
import { PiTrashSimple } from "react-icons/pi";
import DeleteAccountModal from "./DeleteAccountModal";

function DeleteMyAccount() {
  return (
    <>
      <MotionDiv className=" py-6 flex flex-col ">
        <h2 className="text-3xl lg:text-4xl text-error font-medium">
          Delete my account
        </h2>
        <div className="divider"></div>
        <p className=" text-lg lg:text-xl text-gray-500 w-full lg:w-[50rem] text-wrap mb-4">
          Please be advised that account deletion is irreversible and will
          result in permanent loss of all associated data and access privileges.
          Proceed with caution.
        </p>

        <button
          className="btn btn-error btn-outline btn-wide btn-md !rounded-xl self-end lg:mr-4"
          onClick={() => document.getElementById("delete_account").showModal()}
        >
          <PiTrashSimple className="size-5" />
          Delete my account
        </button>
      </MotionDiv>
      <DeleteAccountModal />
    </>
  );
}

export default DeleteMyAccount;
