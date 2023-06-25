import { useQuery } from "@tanstack/react-query";
import { getPatientById } from "~/api/patients";

const usePatient = (id: string) => {
  const query = useQuery({
    enabled: !!id,
    queryFn: () => getPatientById(id),
    queryKey: ["patient", id],
  });

  return query;
};

export default usePatient;
