import { api } from "~/config";
import { Appointment, appointmentSchema } from "~/types";

export const getAppointmentById = async (id: string): Promise<Appointment> => {
  const response = await api.get(`/appointments/${id}`);

  return appointmentSchema.parse(response.data);
};
