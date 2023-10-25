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

 
    const [sidebar, setSidebar] = useState(false);
  return (
    <div className="admin_dashboard_navigation">
      {/* <AdminSidebar ></AdminSidebar> */}
      <AdminSidebar
        sidebar={sidebar}
        navigate={navigate}
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
      ></AdminSidebar>

      <div>
        <AdminHeader></AdminHeader>
        <AdminCurrentState
          currentComponent={currentComponent}
        ></AdminCurrentState>
        {/* <AdminNavigation></AdminNavigation> */}
        {/* <AdminNavigation currentComponent={currentComponent}></AdminNavigation> */}
      </div>
    </div>
  );
}
