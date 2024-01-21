import Category from "../Admin/Table/Category/Category";
import ChatSeller from "../Admin/Table/ChatSeller/ChatSeller";
import DashboardHome from "../Admin/Table/DashboardHome/DashboardHome";
import DeactiveSellers from "../Admin/Table/DeactiveSellers/DeactiveSellers";
import Orders from "../Admin/Table/Orders/Orders";
import PaymentRequest from "../Admin/Table/PaymentRequest/PaymentRequest";
import Sellers from "../Admin/Table/Sellers/Sellers";
import SellersRequest from "../Admin/Table/SellersRequest/SellersRequest";
import SellerDashboardHome from "../Seller/SellerDashboardHome/SellerDashboardHome";
import AddProducts from "../Seller/AddProducts/AddProducts";
import AllProducts from "../Seller/AllProducts/AllProducts";
import DiscountProduct from "../Seller/DiscountProduct/DiscountProduct";
import Payments from "../Seller/Payments/Payments";
import SellerOrders from "../Seller/SellerOrders/SellerOrders";
import ChatCustomer from "../Seller/ChatCustomer/ChatCustomer";
import ChatSupport from "../Seller/ChatSupport/ChatSupport";
import Profile from "../Seller/Profile/Profile";

const allNavigation = [
  {
    id: 1,
    title: "Dashboard",
    role: "admin",
    status: "active",
    datatable: <DashboardHome />,
  },
  {
    id: 2,
    title: "Orders",
    role: "admin",
    status: "active",
    datatable: <Orders />,
  },
  {
    id: 3,
    title: "Category",
    role: "admin",
    status: "active",
    datatable: <Category />,
  },
  {
    id: 4,
    title: "Sellers",
    role: "admin",
    status: "active",
    datatable: <Sellers />,
  },
  {
    id: 5,
    title: "Payment Request",
    role: "admin",
    status: "active",
    datatable: <PaymentRequest />,
  },
  {
    id: 6,
    title: "Deactive Sellers",
    role: "admin",
    status: "active",
    datatable: <DeactiveSellers />,
  },
  {
    id: 7,
    title: "Sellers Request",
    role: "admin",
    status: "active",
    datatable: <SellersRequest />,
  },
  {
    id: 8,
    title: "Chat Seller",
    role: "admin",
    status: "active",
    datatable: <ChatSeller />,
  },
  {
    id: 9,
    title: "Dashboard",
    role: "seller",
    status: "active",
    datatable: <SellerDashboardHome />,
  },
  {
    id: 10,
    title: "Add Products",
    role: "seller",
    status: "active",
    datatable: <AddProducts />,
  },
  {
    id: 11,
    title: "All Products",
    role: "seller",
    status: "active",
    datatable: <AllProducts />,
  },
  {
    id: 12,
    title: "Discount Product",
    role: "seller",
    status: "active",
    datatable: <DiscountProduct />,
  },
  {
    id: 13,
    title: "Orders",
    role: "seller",
    status: "active",
    ability: ["active", "deactive"],
    datatable: <SellerOrders />,
  },
  {
    id: 14,
    title: "Payments",
    role: "seller",
    status: "active",
    datatable: <Payments />,
  },
  {
    id: 15,
    title: "Chat Customer",
    role: "seller",
    status: "active",
    datatable: <ChatCustomer />,
  },
  {
    id: 16,
    title: "Chat Support",
    role: "seller",
    status: "active",
    ability: ["active", "deactive"],
    datatable: <ChatSupport />,
  },
  {
    id: 17,
    title: "Profile",
    role: "seller",
    status: "active",
    datatable: <Profile />,
  },
];

export default allNavigation;

