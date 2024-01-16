import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import navigation from "@/components/Admin/AdminNavigation/AdminNavigation";
import { useState } from "react";
import AdminCurrentState from "@/components/Admin/AdminCurrentState/AdminCurrentState";
import Orders from "@/components/Admin/Table/Orders";
import { routes } from "@/utils/dashboardRoutes";
import DashboardHome from "@/components/Admin/Table/DashboardHome";
import Category from "@/components/Admin/Table/Category";
import AddProduct from "@/components/Admin/Table/AddProduct";
import AllProducts from "@/components/Admin/Table/AllProducts";
import Payment from "@/components/Admin/Table/Payment";
import Profile from "@/components/Admin/Table/Profile";
import Sellers from "@/components/Admin/Table/Sellers";

const navigate = navigation();

export default function Home() {
  // console.log(navigate);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("Dashboard");
  // console.log(routes);
  console.log(currentComponent);
  

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

          {/* {`${
            currentComponent === <DashboardHome /> ? (
              <AdminCurrentState
                currentComponent={<DashboardHome />}
              ></AdminCurrentState>
            ) : currentComponent === <Orders /> ? (
              <AdminCurrentState
                currentComponent={<Orders />}
              ></AdminCurrentState>
            ) : currentComponent === <Category /> ? (
              
            ) : currentComponent === <AddProduct /> ? (
              <AdminCurrentState
                currentComponent={<AddProduct />}
              ></AdminCurrentState>
            ) : (
              ""
            )
          }`} */}

          {currentComponent == "Dashboard" ? (
            <AdminCurrentState
              currentComponent={<DashboardHome />}
            ></AdminCurrentState>
          ) : currentComponent == "Orders" ? (
            <AdminCurrentState
              currentComponent={<Orders />}
            ></AdminCurrentState>
          ) : currentComponent == "Category" ? (
            <AdminCurrentState
              currentComponent={<Category />}
            ></AdminCurrentState>
          ) : currentComponent == "Sellers" ? (
            <AdminCurrentState
              currentComponent={<Sellers />}
            ></AdminCurrentState>
          ) : (
            <AdminCurrentState
              currentComponent={<AddProduct />}
            ></AdminCurrentState>
          )}

          {/* <AdminCurrentState
            currentComponent={<DashboardHome />}
          ></AdminCurrentState> */}
          {/* {`${
            currentComponent === <AddProduct /> ? (
              <AdminCurrentState
                currentComponent={<AddProduct />}
              ></AdminCurrentState>
            ) : (
              ""
            )
          }`}
          {`${
            currentComponent === <AllProducts /> ? (
              <AdminCurrentState
                currentComponent={<AllProducts />}
              ></AdminCurrentState>
            ) : (
              ""
            )
          }`}
          {`${
            currentComponent === <Payment /> ? (
              <AdminCurrentState
                currentComponent={<Payment />}
              ></AdminCurrentState>
            ) : (
              ""
            )
          }`}
          {`${
            currentComponent === <Profile /> ? (
              <AdminCurrentState
                currentComponent={<Profile />}
              ></AdminCurrentState>
            ) : (
              ""
            )
          }`} */}

          {/* <AdminCurrentState>
           {currentComponent}
          </AdminCurrentState> */}
        </div>
      </div>
    </div>
  );
}
