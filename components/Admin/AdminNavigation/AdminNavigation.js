import React from 'react';
import { routes } from '@/utils/dashboardRoutes';

// import Payment from "@/components/Admin/Table/Payment";
// import Profile from "@/components/Admin/Table/Profile";
// import DashboardHome from '../Table/DashboardHome';
// import Orders from '../Table/Orders';
// import Category from '../Table/Category';
// import AddProduct from '../Table/AddProduct';
// import AllProducts from '../Table/AllProducts';

const navigation = () => {
  return [
    {
      id: 1,
      title: "Dashboard",
      role: "admin",
      datatable: routes.DashboardHome,
    },
    {
      id: 2,
      title: "Orders",
      role: "admin",
      datatable: routes.Orders,
    },
    {
      id: 3,
      title: "Category",
      role: "admin",
      datatable: routes.Category,
    },
    {
      id: 4,
      title: "AddProduct",
      role: "admin",
      datatable: routes.AddProduct,
    },
    {
      id: 5,
      title: "AllProducts",
      role: "admin",
      datatable: routes.AllProducts,
    },
  ];
};

export default navigation;