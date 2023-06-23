import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary, Layout, ProtectedRoute } from "~/components";

const PatientDetailsPage = lazy(() => import("~/pages/PatientDetails"));
const PatientsListPage = lazy(() => import("~/pages/Patients"));
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
    children: [
      {
        children: [
          {
            index: true,
            element: <PatientsListPage />,
          },
          {
            element: <PatientDetailsPage />,
            path: ":patientId",
          },
        ],
        path: "patients",
      },
    ],
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    path: "/dashboard",
  },
]);
