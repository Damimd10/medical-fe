import { useMutation } from "@tanstack/react-query";
import { login } from "~/api/auth";

import { LoginData } from "../types";

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginData) => login(data.username, data.password),
  });

  return mutation;
};

export default useLogin;
