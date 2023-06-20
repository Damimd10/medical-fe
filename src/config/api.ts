import axios from "axios";
import { refreshToken } from "~/utils";

interface ISession {
  accessToken: string;
  refreshToken: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const session: ISession | null = JSON.parse(
      localStorage.getItem("session") as string
    );

    if (session?.accessToken) {
      // @ts-ignore
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await refreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export default api;
