import { useQuery } from "@tanstack/react-query";
import { getFolder } from "../services/apiFolder";

export function useGetFolder() {
  const { data, isLoading, isLoadingError } = useQuery({
    queryKey: ["folders"],
    queryFn: getFolder,
  });

  return { data, isLoading, isLoadingError };
}
