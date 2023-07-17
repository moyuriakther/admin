import SalesStatistics from "./SalesStatistics";
import TopTotal from "./TopTotal";
import ProductsStatistics from "./ProductsStatistics";
import { useAllOrdersListQuery } from "../../features/orders/ordersApi";
import LatestOrder from "./LatestOrder";
import { useAllProductsListQuery } from "../../features/products/productsApi";
// import { useSelector } from "react-redux";

const Main = () => {
  const { data: orders, isLoading, error } = useAllOrdersListQuery();
  const {
    data: products,
    // isLoading: productLoading,
    // isError: isProductError,
    // error: productError,
  } = useAllProductsListQuery();
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        {/* top total */}
        <TopTotal orders={orders} products={products} />
        <div className="row">
          {/* statics */}
          <SalesStatistics />
          <ProductsStatistics />
        </div>
        {/* latest orders */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={isLoading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
