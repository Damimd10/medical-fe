import { useMutation } from "@tanstack/react-query";
import { updateAppointmentFields } from "~/api/appointments";

const useUpdateAppointmentFields = () => {
  const mutation = useMutation({
    mutationFn: (formData: any) =>
      updateAppointmentFields(formData.id, formData.appointment),
  });

  return mutation;
};

export default useUpdateAppointmentFields;
