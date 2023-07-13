import { useParams } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditProduct from "../components/products/EditProduct";

const EditProductScreen = () => {
  const { productId } = useParams();

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProduct productId={productId} />
      </main>
    </>
  );
};

export default EditProductScreen;
