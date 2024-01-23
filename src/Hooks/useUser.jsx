import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUser = () => {
  const axios = useAxios();
  const {
    data: user,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["user", "user"],
    queryFn: async () => {
      const res = await axios.get("/user");
      // console.log(res.data);
      return res.data;
    },
  });
  return { user, isPending, refetch };
};

export default useUser;
