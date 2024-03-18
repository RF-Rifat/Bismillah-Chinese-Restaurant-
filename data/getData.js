import { useQuery } from "@tanstack/react-query";

const useGetUserData = (endpoint) => {
  const {
    isPending,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch("http://localhost:3000" + endpoint).then((res) => res.json()),
  });
  return [data, refetch, isPending];
};

export default useGetUserData;
