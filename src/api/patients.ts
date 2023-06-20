import { z } from "zod";
import { api } from "~/config";

const patientSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  surname: z.string().nullable(),
  social_insurance_number: z.string().nullable(),
  birth_date: z.string().nullable(),
  phone_number: z.string().nullable(),
  is_alive: z.boolean(),
  email: z.string().nullable(),
  country: z.string().nullable(),
  city: z.string().nullable(),
  street: z.string().nullable(),
  created_by_id: z.number(),
  social_insurance_id: z.number().nullable(),
});

export type Patient = z.infer<typeof patientSchema>;

export const getPatients = async (): Promise<Patient[]> => {
  const response = await api.get("/patients");

  return response.data.map((patient: Patient) => patientSchema.parse(patient));
};
