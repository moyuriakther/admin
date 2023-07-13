import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/products/productsApi";
import { useEditProductMutation } from "../../features/products/productsApi";
import Error from "../loadingErrors/Error";
import Loading from "../loadingErrors/Loading";
// import { toast } from "react-toastify";
import Toast from "../loadingErrors/Toast";
import { useDispatch } from "react-redux";

// const toastObjects = {
//   pauseOnFocusLoss: false,
//   draggable: false,
//   pauseOnHover: false,
//   autoClose: 2000,
// };

const EditProduct = (props) => {
  const productId = props.productId;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {
  //   loading: updateLoading,
  //   error: updateError,
  //   success: updateSuccess,
  // } = productUpdate;
  // console.log(updateError, updateLoading, updateSuccess);
  const {
    data: product,
    isError,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId);
  const [
    editProduct,
    {
      isError: isEditError,
      isLoading: editLoading,
      error: editError,
      isSuccess,
    },
  ] = useEditProductMutation();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // if (editSuccess) {
    //   dispatch({ type: PRODUCTS_UPDATE_RESET });
    //   toast.success("Product Updated", toastObjects);
    // } else {
    //   if (!product.name || product._id !== productId) {
    //     dispatch(editProduct(productId));
    //   } else {
    setCountInStock(product?.countInStock);
    setDescription(product?.description);
    setImage(product?.image);
    setName(product?.name);
    setPrice(product?.price);
    // }
    // }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productId, name, image, price, description, countInStock);
    dispatch(
      editProduct({
        _id: productId,
        product: {
          name,
          image,
          price,
          description,
          countInStock,
        },
      })
    );
  };
  if (isSuccess) {
    navigate("/products");
  }
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleSubmit}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Edit Product</h2>
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
                  {isEditError && (
                    <Error variant="alert-danger">{editError}</Error>
                  )}
                  {editLoading && <Loading />}
                  {isLoading ? (
                    <Loading />
                  ) : isError ? (
                    <Error variant="alert-danger">{error}</Error>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="product_title">
                          Product Title
                        </label>
                        <input
                          type="text"
                          placeholder="product name"
                          className="form-control"
                          id="product_title"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="product_price">
                          Product Price
                        </label>
                        <input
                          type="number"
                          placeholder="product price"
                          className="form-control"
                          id="product_price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="product_stock">
                          Count In Stock
                        </label>
                        <input
                          type="number"
                          placeholder="product quantity"
                          className="form-control"
                          id="product_stock"
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="product_description"
                        >
                          Description
                        </label>
                        <textarea
                          type="number"
                          placeholder="product description"
                          className="form-control"
                          id="product_description"
                          rows="7"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="product_image">
                          Images
                        </label>
                        <input
                          type="text"
                          placeholder="image link"
                          className="form-control"
                          id="product_image"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProduct;
