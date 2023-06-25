import { api } from "~/config";
import { Patient, patientSchema } from "~/types";

export const getPatientById = async (id: string): Promise<Patient> => {
  const response = await api.get(`/patients/${id}`);

  return patientSchema.parse(response.data);
};

export const getPatients = async (): Promise<Patient[]> => {
  const response = await api.get("/patients");

  return response.data.map((patient: Patient) => patientSchema.parse(patient));
};
