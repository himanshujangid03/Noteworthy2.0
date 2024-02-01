import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

function FolderDropdown() {
  return (
    <>
      <details className="dropdown">
        <summary className="btn btn-ghost rounded-full">
          <BsThreeDotsVertical />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 text-md">
          <li>
            <Link to={"/folder/notes"}>View</Link>
          </li>
          <li>
            <a>Edit</a>
          </li>
          <li>
            <a>Delete</a>
          </li>
        </ul>
      </details>
    </>
  );
}

export default FolderDropdown;
