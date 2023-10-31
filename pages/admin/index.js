import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";

import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import navigation from "@/components/Admin/AdminNavigation/AdminNavigation";
// import { routes } from "@/utils/dashboardRoutes";
import { useState } from "react";
import AdminCurrentState from "@/components/Admin/AdminCurrentState/AdminCurrentState";

const navigate = navigation();


export default function Home() {
    console.log(navigate);
    const [currentComponent, setCurrentComponent] = useState(
      navigate[0].datatable
    );
    console.log(currentComponent);

 
    const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="admin_dashboard_navigation">
      {/* <AdminSidebar ></AdminSidebar> */}

        <AdminSidebar
          navigate={navigate}
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
          openSidebar={openSidebar}
        ></AdminSidebar>


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
        
        <div className="admin_dashboard_currentstate">
          <AdminHeader
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          ></AdminHeader>
          <AdminCurrentState
            currentComponent={currentComponent}
          ></AdminCurrentState>
          {/* <AdminNavigation></AdminNavigation> */}
          {/* <AdminNavigation currentComponent={currentComponent}></AdminNavigation> */}
        </div>
      </div>
    </div>
  );
}
