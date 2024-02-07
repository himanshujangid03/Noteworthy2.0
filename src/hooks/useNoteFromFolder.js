import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getNotesFromFolderById } from "../services/apiNote";

export function useNoteFromFolder() {
  const { folderId } = useParams();
  const { data: notes } = useQuery({
    queryKey: ["notesFromFolders"],
    queryFn: () => getNotesFromFolderById(folderId),
  });

  return { notes };
}
