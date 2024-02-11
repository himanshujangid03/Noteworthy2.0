import { useQuery } from "@tanstack/react-query";
import { getAvatarImage } from "../../services/apiAvatar";
import { useIsLoggedIn } from "../Auth hooks/useIsLoggedIn";

export function useGetAvatar() {
  const { data: userData } = useIsLoggedIn();
  const { data, isLoading } = useQuery({
    queryKey: ["avatar"],
    queryFn: () => getAvatarImage(userData?.email),
  });

  return { data, isLoading };
}
