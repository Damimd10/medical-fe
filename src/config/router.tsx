import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary, Layout, ProtectedRoute } from "~/components";

const HomePage = lazy(() => import("~/pages/Home"));
const RootPage = lazy(() => import("~/pages/Root"));
const SignInPage = lazy(() => import("~/pages/SignIn"));
const SignUpPage = lazy(() => import("~/pages/SignUp"));

export default createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorBoundary />,
    path: "/",
  },
  {
    element: <SignInPage />,
    path: "/sign-in",
  },
  {
    element: <SignUpPage />,
    path: "/sign-up",
  },
  {
    children: [{ element: <HomePage />, path: "/dashboard" }],
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
  },
]);
