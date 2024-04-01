import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../services/apiNote";

export function useAllNotes() {
  const { isLoading, data } = useQuery({
    queryKey: ["allNotes"],
    queryFn: getAllNotes,
  });

  return { isLoading, data };
}
