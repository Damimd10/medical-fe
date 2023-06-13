import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "~/components";

const RootPage = lazy(() => import("~/pages/Root"));

export default createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorBoundary />,
  },
]);
