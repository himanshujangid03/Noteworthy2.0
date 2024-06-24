import { useForm } from "react-hook-form";
import MotionDiv from "../../Animation/MotionDiv";
import { PiTrashSimple } from "react-icons/pi";
import { deleteUser } from "@/services/apiAuth";

function DeleteMyAccount() {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    deleteUser();
  };

  return (
    <MotionDiv className=" py-6 flex flex-col ">
      <h2 className="text-3xl lg:text-4xl text-error font-medium">
        Delete my account
      </h2>
      <div className="divider"></div>
      <p className=" text-lg lg:text-xl text-gray-500 w-full lg:w-[50rem] text-wrap mb-4">
        Please be advised that account deletion is irreversible and will result
        in permanent loss of all associated data and access privileges. Proceed
        with caution.
      </p>
      <form method="Delete" onSubmit={handleSubmit(onSubmit)}>
        <button className="btn btn-error btn-outline btn-wide btn-md !rounded-xl self-center lg:self-end lg:mr-4">
          <PiTrashSimple className="size-5" />
          Delete my account
        </button>
      </form>
    </MotionDiv>
  );
}

export default DeleteMyAccount;
