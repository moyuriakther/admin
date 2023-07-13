import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../loadingErrors/Toast.jsx";
import { useCreateProductMutation } from "../../features/products/productsApi.js";
import Error from "../loadingErrors/Error.jsx";
import Loading from "../loadingErrors/Loading";

const toastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProduct = () => {
  const [createProduct, { isError, isLoading, error, isSuccess }] =
    useCreateProductMutation();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added successfully", toastObjects);
      setCountInStock(0);
      setDescription("");
      setImage("");
      setName("");
      setPrice(0);
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct({ name, image, price, description, countInStock });
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleSubmit}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Add Products</h2>
            <div>
              <button className="btn btn-primary" type="submit">
                Publish now
              </button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {isError && <Error variant="alert-danger">{error}</Error>}
                  {isLoading && <Loading />}
                  <div className="mb-4">
                    <label className="form-label" htmlFor="product_title">
                      Product Title
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Enter Product Name"
                      className="form-control"
                      id="product_title"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="product_price">
                      Product Price
                    </label>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="Enter Product Price"
                      className="form-control"
                      id="product_price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="product_stock">
                      Count In Stock
                    </label>
                    <input
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                      type="number"
                      placeholder="Enter Product Quantity"
                      className="form-control"
                      id="product_stock"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="product_description">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="number"
                      placeholder="Write Product Description"
                      className="form-control"
                      id="product_description"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="product_image">
                      Images
                    </label>
                    <input
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      type="text"
                      placeholder="Enter Product Image"
                      className="form-control"
                      id="product_image"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
