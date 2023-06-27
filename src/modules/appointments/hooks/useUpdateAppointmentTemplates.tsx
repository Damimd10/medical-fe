import { useMutation } from "@tanstack/react-query";
import { updateAppointmentTemplates } from "~/api/appointments";

const useUpdateAppointmentTemplates = () => {
  const mutation = useMutation({
    mutationFn: (formData: any) =>
      updateAppointmentTemplates(formData.id, formData.appointment),
  });

  return mutation;
};

export default useUpdateAppointmentTemplates;
