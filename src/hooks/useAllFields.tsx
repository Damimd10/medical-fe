import { useQuery } from "@tanstack/react-query";
import { getAllFields } from "~/api/fields";

const useAllFields = () => {
  const query = useQuery({
    queryFn: getAllFields,
    queryKey: ["fields"],
  });

  return query;
};

export default useAllFields;
