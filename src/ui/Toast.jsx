import toast from "react-hot-toast";

function Toast() {
  return (
    <div>
      {toast((t) => (
        <span>
          Custom and <b>bold</b>
          <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
        </span>
      ))}
    </div>
  );
}

export default Toast;
