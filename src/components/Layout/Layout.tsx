import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PatientsPage = lazy(() => import("~/pages/Patients"));

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route element={<PatientsPage />} path="/patients" />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
