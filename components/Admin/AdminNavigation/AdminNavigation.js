import DashboardHome from '../Table/DashboardHome';
import Orders from '../Table/Orders';
import Category from '../Table/Category';
import Sellers from '../Table/Sellers';
import PaymentRequest from '../Table/PaymentRequest';
import DeactiveSellers from '../Table/DeactiveSellers';
import SellersRequest from '../Table/SellersRequest';


const navigation = () => {
  return [
    {
      id: 1,
      title: "Dashboard",
      role: "admin",
      datatable: <DashboardHome/>,
    },
    {
      id: 2,
      title: "Orders",
      role: "admin",
      datatable: <Orders/>,
    },
    {
      id: 3,
      title: "Category",
      role: "admin",
      datatable: <Category/>,
    },
    {
      id: 4,
      title: "Sellers",
      role: "admin",
      datatable: <Sellers/>,
    },
    {
      id: 5,
      title: "Payment Request",
      role: "admin",
      datatable: <PaymentRequest/>,
    },
    {
      id: 6,
      title: "Deactive Sellers",
      role: "admin",
      datatable: <DeactiveSellers/>,
    },
    {
      id: 7,
      title: "Sellers Request",
      role: "admin",
      datatable: <SellersRequest/>,
    },
    
  ];
};

export default navigation;