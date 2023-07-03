import { useMutation } from "@tanstack/react-query";
import { removeFieldsFromAppointment } from "~/api/appointments";

interface FormData {
  id: string;
  fields: number[];
}

const useRemoveFields = () => {
  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      removeFieldsFromAppointment(formData.id, formData.fields),
  });

  return mutation;
};

export default useRemoveFields;
