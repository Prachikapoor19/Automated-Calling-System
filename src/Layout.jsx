import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="dashboard d-flex">
      <Sidebar />

      <div className="main container-fluid p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;