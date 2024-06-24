//import { LoaderIcon } from "react-hot-toast";
import { CiFileOn, CiSearch } from "react-icons/ci";
import { useGetFolder } from "../hooks/Folder hooks/useGetFolder";
import { useState } from "react";
import { useAllNotes } from "../hooks/Notes hooks/useAllNotes";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function SearchDocumentModal() {
  const [query, setQuery] = useState();
  const { data: notes } = useAllNotes();
  const { data: folders } = useGetFolder();
  const note =
    query &&
    notes?.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));

  const folder =
    query &&
    folders?.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <dialog id="search_docs" className="modal">
        <div className="modal-box h-3/4 p-0">
          <div className="bg-base-100 px-4 py-2 grid grid-flow-col grid-cols-[auto,1fr] border-b-2 border-gray-300 sticky top-0">
            <CiSearch className=" h-6 w-6 self-center text-gray-600 mr-4 " />
            <input
              type="text"
              className="input outline-none focus:outline-none border-none text-xl"
              placeholder="Search for documents..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <m.div className="overflow-hidden p-4">
            {note && (
              <m.div className=" mt-2">
                <h1 className=" text-xl mb-2">
                  {note.length} results from notes
                </h1>
                <m.ul className="">
                  {note.map((el) => (
                    <m.li layout key={el._id} className="text-xl">
                      <Link
                        to={`/folder/${el.folderId}/${el._id}`}
                        className="flex gap-1 p-3 mb-2 rounded-lg hover:bg-base-200"
                        onClick={() => {
                          document
                            .getElementById("search_docs")
                            .classList.remove("modal-open");
                        }}
                      >
                        {el.emoji ? (
                          el.emoji
                        ) : (
                          <CiFileOn className="self-center text-primary" />
                        )}{" "}
                        {el.title}
                      </Link>
                    </m.li>
                  ))}
                </m.ul>
                <div className="divider m-0"></div>
              </m.div>
            )}
            {folder && (
              <div className="mt-4">
                <h1 className=" text-xl mb-2">
                  {folder.length} results from folders
                </h1>
                <ul>
                  {folder?.map((el) => (
                    <li key={el._id} className="">
                      <Link
                        className="flex gap-1 p-3 mb-2 text-xl rounded-lg hover:bg-base-200"
                        to={`/folder/${el._id}`}
                        onClick={() => {
                          document
                            .getElementById("search_docs")
                            .classList.remove("modal-open");
                        }}
                      >
                        📂 {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="divider m-0"></div>
              </div>
            )}
          </m.div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default SearchDocumentModal;
