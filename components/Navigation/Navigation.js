import Category from "../Admin/Table/Category/Category";
import ChatSeller from "../Admin/Table/ChatSeller/ChatSeller";
import DashboardHome from "../Admin/Table/DashboardHome/DashboardHome";
import DeactiveSellers from "../Admin/Table/DeactiveSellers/DeactiveSellers";
import Orders from "../Admin/Table/Orders/Orders";
import PaymentRequest from "../Admin/Table/PaymentRequest/PaymentRequest";
import Sellers from "../Admin/Table/Sellers/Sellers";
import SellersRequest from "../Admin/Table/SellersRequest/SellersRequest";

const navigation = () => {
  return [
    {
      id: 1,
      title: "Dashboard",
      role: "admin",
      datatable: <DashboardHome />,
    },
    {
      id: 2,
      title: "Orders",
      role: "admin",
      datatable: <Orders />,
    },
    {
      id: 3,
      title: "Category",
      role: "admin",
      datatable: <Category />,
    },
    {
      id: 4,
      title: "Sellers",
      role: "admin",
      datatable: <Sellers />,
    },
    {
      id: 5,
      title: "Payment Request",
      role: "admin",
      datatable: <PaymentRequest />,
    },
    {
      id: 6,
      title: "Deactive Sellers",
      role: "admin",
      datatable: <DeactiveSellers />,
    },
    {
      id: 7,
      title: "Sellers Request",
      role: "admin",
      datatable: <SellersRequest />,
    },
    {
      id: 8,
      title: "Chat Seller",
      role: "admin",
      datatable: <ChatSeller />,
    },
  ];
};

export default navigation;
