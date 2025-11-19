import { useQuery } from "@tanstack/react-query";
import { authService } from "./auth";

const useUser = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await authService.getMe();
      return res.data.user; // sadece user nesnesini döndür
    },
  });
  return { isLoading, error, user: data };
};

export default useUser;