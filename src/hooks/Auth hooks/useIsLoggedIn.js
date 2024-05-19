import { useQuery } from "@tanstack/react-query";
import { isLoggedIn } from "../../services/apiAuth";

export function useIsLoggedIn() {
  const { data, isError } = useQuery({
    queryKey: ["isloggedIn"],
    queryFn: isLoggedIn,
  });
  const email = data?.email;
  const mode = data?.mode;

  return { data, isError, email, mode };
}
