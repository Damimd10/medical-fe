import mem from "mem";
import { api } from "~/config";

const refreshToken = async () => {
  const session = JSON.parse(localStorage.getItem("session") as string);

  try {
    const response = await api.post("/auth/refresh", {
      refreshToken: session?.refreshToken,
    });

    if (!response.data) {
      localStorage.removeItem("session");
    }

    localStorage.setItem("session", JSON.stringify(response.data));

    return session;
  } catch (error) {
    localStorage.removeItem("session");
  }
};

const maxAge = 10000;

const memoizedRefreshToken = mem(refreshToken, {
  maxAge,
});

export default memoizedRefreshToken;
