import { useQuery } from "@tanstack/react-query";
import { getActivityLog } from "../../services/apiActivity";

export function useGetActivityLog() {
  const { data, isLoading } = useQuery({
    queryKey: ["getActivityLog"],
    queryFn: getActivityLog,
  });

  return { data, isLoading };
}
