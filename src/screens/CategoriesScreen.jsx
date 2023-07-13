import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainCategories from "../components/categories/MainCategories";

const CategoriesScreen = () => {
  return (
    <>
      <Sidebar />
      <div className="main-wrap">
        <Header />
        <MainCategories />
      </div>
    </>
  );
};

export default CategoriesScreen;
