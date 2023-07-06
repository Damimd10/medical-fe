import { api } from "~/config";
import { Field } from "~/types";

export const getAllFields = async (): Promise<Field[]> => {
  const response = await api.get("/fields");

  return response.data;
};
