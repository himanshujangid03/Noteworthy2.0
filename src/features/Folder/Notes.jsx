import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNotesFromFolderById } from "../../services/apiFolder";
import NoteList from "./NoteList";

function Notes() {
  const { folderId } = useParams();
  const { data: notes } = useQuery({
    queryKey: ["notesFromFolders"],
    queryFn: () => getNotesFromFolderById(folderId),
  });

  return (
    <div className="grid grid-flow-col grid-cols-4">
      {notes?.map((note) => (
        <NoteList key={note._id} item={note} />
      ))}
    </div>
  );
}

export default Notes;
