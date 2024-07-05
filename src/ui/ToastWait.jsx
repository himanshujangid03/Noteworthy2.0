import toast from "react-hot-toast";

function ToastWait({ t }) {
  return (
    <>
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-[40rem] w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 flex w-0 p-4 justify-start">
          <p className="text-lg">
            Data loading may take up to 1 minute, as the server is hosted on the
            free plan. I appreciate your understanding.
          </p>
        </div>
        <div className="flex border-l border-gray-200 px-4 hover:text-blue-500">
          <button onClick={() => toast.dismiss(t.id)} className="">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ToastWait;
