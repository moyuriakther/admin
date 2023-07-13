import CreateCategory from "./CreateCategory";
import CategoryTable from "./CategoryTable";

const MainCategories = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* create categories */}
            <CreateCategory />
            {/* categories table */}
            <CategoryTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
