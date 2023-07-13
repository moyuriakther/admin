import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OrderDetails from "../components/orders/OrderDetails";
import { useParams } from "react-router";

const OrderDetailsScreen = () => {
  const { id } = useParams();
  return (
    <>
      <Sidebar />
      <div className="main-wrap">
        <Header />
        <OrderDetails id={id} />
      </div>
    </>
  );
};

export default OrderDetailsScreen;
