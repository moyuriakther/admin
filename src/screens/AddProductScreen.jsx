import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddProduct from "../components/products/AddProduct";

const AddProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProduct />
      </main>
    </>
  );
};

export default AddProductScreen;
