import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import getFolder from "../../services/apiFolder";
import Note from "./Note";

function Notes() {
  const { folderId } = useParams();
  const { data } = useQuery({
    queryFn: getFolder,
    queryKey: ["folders"],
  });
  const folder = data.filter((obj) => obj._id === folderId);
  const notes = folder[0].notesId;

  return (
    <div>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
