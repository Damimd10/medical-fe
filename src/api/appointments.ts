import { api } from "~/config";
import { Appointment, appointmentSchema } from "~/types";

export const createAppointment = async (data: any): Promise<Appointment> => {
  const response = await api.post("/appointments", data);

  return response.data;
};

export const getAppointmentById = async (id: string): Promise<Appointment> => {
  const response = await api.get(`/appointments/${id}`);

  return appointmentSchema.parse(response.data);
};

export const updateAppointmentFields = async (
  id: string,
  data: any
): Promise<Appointment> => {
  const response = await api.post(`/appointments/${id}/fields`, data);

  return response.data;
};

export const updateAppointmentTemplates = async (id: string, data: any) => {
  const response = await api.post(`/appointments/${id}/templates`, data);

  return response.data;
};

export const removeFieldsFromAppointment = async (id: string, data: any) => {
  const response = await api.post(`/appointments/${id}/detach-field`, data);

  return response.data;
};
