import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUser = () => {
  const axios = useAxios();
  const {
    data: user = null,
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
  console.log(user, refetch);
  return { user, isPending, refetch };
};

export default useUser;
