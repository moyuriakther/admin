import SalesStatistics from "./SalesStatistics";
// import TopTotal from "./TopTotal";
import ProductsStatistics from "./ProductsStatistics";
// import LatestOrder from "./LatestOrder";
// import { useSelector } from "react-redux";

const Main = () => {
  // const ordersList = useSelector((state) => state.ordersList);
  // const { loading, error, orders } = ordersList;
  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        {/* top total */}
        {/* <TopTotal orders={orders} products={products} /> */}
        <div className="row">
          {/* statics */}
          <SalesStatistics />
          <ProductsStatistics />
        </div>
        {/* latest orders */}
        <div className="card mb-4 shadow-sm">
          {/* <LatestOrder orders={orders} loading={loading} error={error} /> */}
        </div>
      </section>
    </>
  );
};

export default Main;
