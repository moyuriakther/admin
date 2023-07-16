// import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useAllProductsListQuery } from "../../features/products/productsApi";
import Loading from "../loadingErrors/Loading";
import Error from "../loadingErrors/Error";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../features/searchSlice";

const MainProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useAllProductsListQuery();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateFilters({ search: e.target.value }));
  };
  const filters = useSelector((state) => state.filters);
  const { search } = filters;

  const searchProduct = (product) => {
    if (search) {
      return product?.name
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    } else {
      return true;
    }
  };
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error variant="alert-danger">{error}</Error>;
  } else if (!isLoading && !isError && products.length === 0) {
    content = <div>Products Not available</div>;
  } else if (!isLoading && !isError && products.length > 0) {
    const productToShow = products?.filter(searchProduct);
    content = (
      <div className="row">
        {" "}
        {productToShow?.length > 0
          ? productToShow
              ?.filter(searchProduct)
              .map((product, i) => <Product product={product} key={i} />)
          : "No task found"}
      </div>
    );
  }
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="search"
                className="form-control p-2"
                onChange={handleSearch}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          {/* {deleteError && <Error variant="alert-danger">{deleteError}</Error>} */}
          {content}
          {/* <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link to="#" className="page-link">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link to="#" className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item ">
                <Link to="#" className="page-link">
                  2
                </Link>
              </li>
              <li className="page-item ">
                <Link to="#" className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item ">
                <Link to="#" className="page-link">
                  Next
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
