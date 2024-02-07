import { useQuery } from "@tanstack/react-query";
import { isLoggedIn } from "../services/apiAuth";

export function useIsLoggedIn() {
  const { data, isSuccess } = useQuery({
    queryKey: ["isloggedIn"],
    queryFn: isLoggedIn,
  });

  return { data, isSuccess };
}
