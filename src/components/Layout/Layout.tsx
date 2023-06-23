import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex border h-screen">
      <Sidebar />
      <section className="border border-[#E0E7FE] rounded-3xl bg-slate-400 bg-opacity-40 w-full m-4 p-8">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
