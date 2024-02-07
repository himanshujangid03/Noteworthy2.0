function DeleteMyAccount() {
  return (
    <div className=" p-2 flex flex-col ">
      <h2 className=" text-4xl text-error font-medium">Delete my account</h2>
      <div className="divider"></div>
      <p className=" text-xl text-gray-500 max-w-[60%] mb-4">
        Please be advised that account deletion is irreversible and will result
        in permanent loss of all associated data and access privileges. Proceed
        with caution.
      </p>
      <button className="btn btn-error btn-outline btn-wide btn-md !rounded-xl self-end mr-4">
        Delete my account
      </button>
    </div>
  );
}

export default DeleteMyAccount;
