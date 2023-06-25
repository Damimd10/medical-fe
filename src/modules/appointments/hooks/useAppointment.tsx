import { useQuery } from "@tanstack/react-query";
import { getAppointmentById } from "~/api/appointments";

const useAppointment = (id: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["appointment", id],
    queryFn: () => getAppointmentById(id),
  });

  return query;
};

export default useAppointment;
