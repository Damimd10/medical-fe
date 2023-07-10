import { useQuery } from "@tanstack/react-query";
import { getSpecialities } from "~/api/specialities";
import { Speciality } from "~/types";

const useSpecialities = () => {
  const query = useQuery<Speciality[]>({
    queryFn: getSpecialities,
    queryKey: ["specialities"],
  });

  return query;
};
export default useSpecialities;
