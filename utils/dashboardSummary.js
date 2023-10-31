import {
  AiOutlineShoppingCart
} from "react-icons/ai";
import {
  FaUsers
} from "react-icons/fa";
import {
  BsCurrencyDollar
} from "react-icons/bs";
import {
  RiProductHuntLine
} from "react-icons/ri";


const dashboardSummary = () =>{
    return [
    {
        value: '$1350',
        title: "Total Sales",
        icon: BsCurrencyDollar
    },
    {
        value: '16',
        title: "Products",
        icon: RiProductHuntLine
    },
    {
        value: '50',
        title: "Total Sales",
        icon: FaUsers
    },
    {
        value: '100',
        title: "Orders",
        icon: AiOutlineShoppingCart
    },
]
};

export default dashboardSummary;