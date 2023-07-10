import { api } from "~/config";
import { Speciality, specialitySchema } from "~/types";

export const getSpecialities = async (): Promise<Speciality[]> => {
  const response = await api.get("/specialities");

  return response.data.map((speciality: Speciality) =>
    specialitySchema.parse(speciality)
  );
};
