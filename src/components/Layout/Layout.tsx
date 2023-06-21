import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./Sidebar";

const PatientsPage = lazy(() => import("~/pages/Patients"));

const Layout = () => {
  return (
    <div className="flex border border-red-500 h-screen">
      <Sidebar />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route element={<PatientsPage />} path="/patients" />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
