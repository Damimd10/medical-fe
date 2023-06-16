import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary, Layout } from "~/components";

const HomePage = lazy(() => import("~/pages/Home"));
const RootPage = lazy(() => import("~/pages/Root"));

export default createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorBoundary />,
    path: "/",
  },
  {
    children: [{ element: <HomePage />, path: "/dashboard" }],
    element: <Layout />,
  },
]);
