//import { LoaderIcon } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { useGetFolder } from "../hooks/Folder hooks/useGetFolder";
import { useState } from "react";
import { useAllNotes } from "../hooks/Notes hooks/useAllNotes";
import { Link } from "react-router-dom";

function SearchDocumentModal() {
  const [query, setQuery] = useState();
  const { data: notes } = useAllNotes();
  const { data: folders } = useGetFolder();
  const note =
    query &&
    notes.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));

  const folder =
    query &&
    folders.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <dialog id="search_docs" className="modal">
        <div className="modal-box h-96">
          <div className=" grid grid-flow-col grid-cols-[auto,1fr] border-b-2 border-gray-300">
            <CiSearch className=" h-6 w-6 self-center text-gray-600 mr-4 " />
            <input
              type="text"
              className="input outline-none focus:outline-none border-none text-xl"
              placeholder="Search for documents..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {note && (
            <div className=" mt-2">
              <h1 className=" text-primary text-2xl font-semibold m-0">
                Notes
              </h1>
              <div className="divider m-0"></div>
              <ul className="">
                {note.map((el) => (
                  <li key={el._id} className=" p-1">
                    <Link
                      to={`/folder/${el.folderId}/${el._id}`}
                      onClick={() => {
                        document
                          .getElementById("search_docs")
                          .classList.remove("modal-open");
                      }}
                    >
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {folder && (
            <div>
              <h1 className=" text-primary text-2xl font-semibold m-0">
                Folders
              </h1>
              <div className="divider m-0"></div>
              <ul>
                {folder?.map((el) => (
                  <li key={el._id}>
                    <Link
                      to={`/folder/${el._id}`}
                      onClick={() => {
                        document
                          .getElementById("search_docs")
                          .classList.remove("modal-open");
                      }}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default SearchDocumentModal;
