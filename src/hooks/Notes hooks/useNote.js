import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNote } from "../../services/apiNote";

export function useNote() {
  const { folderId } = useParams();
  const { data: notes } = useQuery({
    queryKey: ["notesFromFolders"],
    queryFn: () => getNote(folderId),
  });

  return { notes };
}
