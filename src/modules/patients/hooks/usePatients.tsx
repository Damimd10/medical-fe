import { useQuery } from "@tanstack/react-query";
import { getPatients } from "~/api/patients";

const usePatients = () => {
  const query = useQuery({
    queryFn: getPatients,
    queryKey: ["patients"],
  });

  return query;
};

export default usePatients;
