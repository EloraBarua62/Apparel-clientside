import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import navigation from "@/components/Admin/AdminNavigation/AdminNavigation";
import { useState } from "react";
import AdminCurrentState from "@/components/Admin/AdminCurrentState/AdminCurrentState";
import DashboardHome from "@/components/Admin/Table/DashboardHome";


const navigate = navigation();

export default function Home() {
  
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(DashboardHome);

  return (
    <div className="admin_dashboard_navigation">
      {/* sidebar for navigation */}
      <AdminSidebar
        navigate={navigate}
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
        openSidebar={openSidebar}
      ></AdminSidebar>

      {/* navigated state */}
      <div className="admin_dashboard_currentstate_upper">
        <div
          onClick={() => {
            setOpenSidebar(false);
          }}
          className={`${
            !openSidebar
              ? "admin_dashboard_sidebar_hide"
              : "admin_dashboard_sidebar_open"
          }`}
        ></div>

        {/* Current state section */}
        <div className="admin_dashboard_currentstate">
          <AdminHeader
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          ></AdminHeader>

         
          <AdminCurrentState
            currentComponent={currentComponent}
          ></AdminCurrentState>
         
        </div>
      </div>
    </div>
  );
}
