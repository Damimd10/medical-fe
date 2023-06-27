import { useMutation } from "@tanstack/react-query";
import { updateAppointment } from "~/api/appointments";

const useUpdateAppointment = () => {
  const mutation = useMutation({
    mutationFn: (formData: any) =>
      updateAppointment(formData.id, formData.appointment),
  });

  return mutation;
};

export default useUpdateAppointment;
