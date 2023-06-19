import { z } from "zod";
import { api } from "~/config";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const loginSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post("/auth/signin", { username, password });

  if (response.data.accessToken) {
    localStorage.setItem("session", JSON.stringify(response.data));
  }

  return loginSchema.parse(response.data);
};
