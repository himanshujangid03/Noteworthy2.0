import { useQuery } from "@tanstack/react-query";
import { isLoggedIn } from "../../services/apiAuth";

export function useIsLoggedIn() {
  const { data, isLoading } = useQuery({
    queryKey: ["isloggedIn"],
    queryFn: isLoggedIn,
  });
  const email = data?.email;
  const mode = data?.mode;
  //const localData = localStorage.setItem("userData", JSON.stringify(data));

  return { data, isLoading, email, mode };
}
