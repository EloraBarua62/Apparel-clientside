import AdminHeader from "@/components/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import { useEffect, useState } from "react";
import AdminCurrentState from "@/components/AdminCurrentState/AdminCurrentState";
import DashboardHome from "@/components/Admin/Table/DashboardHome/DashboardHome";
import getNavigation from "@/components/Navigation";
import { useSelector } from "react-redux";


export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(DashboardHome);
  const [navigate, setNavigate] = useState([]);
  
  const {role} = useSelector(state => state.auth) 

  useEffect(() => {
    setNavigate(getNavigation(role));
  },[])
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
