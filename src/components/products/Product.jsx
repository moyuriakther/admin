import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../features/products/productsApi";

const Product = ({ product }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleProductDelete = (id) => {
    console.log(id);
    if (window.confirm("Delete Confirm")) {
      deleteProduct(id);
    }
  };
  return (
    <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
      <div className="card card-product-grid shadow-sm">
        <Link to="#" className="img-wrap">
          <img src={product?.image} alt={product?.name} />
        </Link>
        <div className="info-wrap">
          <Link className="title text-truncate" to="#">
            {product?.name}
          </Link>
          <div className="price mb-2">$ {product?.price}</div>
          <div className="row">
            <Link
              className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              to={`/product/${product?._id}/edit`}
            >
              <i className="fas fa-pen"></i>
            </Link>
            <Link
              className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              to=""
              onClick={() => handleProductDelete(product._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
