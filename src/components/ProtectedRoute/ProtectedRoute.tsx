import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useLocalStorage } from "~/hooks";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [values] = useLocalStorage("session", null);

  if (!values?.accessToken) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
