import { useQuery } from "@tanstack/react-query";
import { getAppointmentById } from "~/api/appointments";
import useAppointmentStore from "~/store/appointments";

const useAppointment = (id: string) => {
  const { resetPrefilledTemplates, updatePrefilledTemplates } =
    useAppointmentStore();

  const query = useQuery({
    enabled: !!id,
    onSuccess: (data) => {
      resetPrefilledTemplates();

      if (data.appointment_templates && data.appointment_templates.length) {
        data.appointment_templates.forEach((appointmentTemplate) =>
          updatePrefilledTemplates(appointmentTemplate.template.id)
        );
      }
    },
    queryKey: ["appointment", id],
    queryFn: () => getAppointmentById(id),
  });

  return query;
};

export default useAppointment;
