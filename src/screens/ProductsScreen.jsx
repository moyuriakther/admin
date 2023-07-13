import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainProducts from "../components/products/MainProducts";

const ProductsScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductsScreen;
