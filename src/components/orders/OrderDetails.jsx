// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import OrderDetailInfo from "./OrderDetailInfo";
// import OrderDetailProducts from "./OrderDetailProducts";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getOrderDetails,
//   orderDeliver,
// } from "../../Redux/Actions/orderActions";
// import Loading from "../loadingErrors/Loading.jsx";
// import Error from "../loadingErrors/Error.jsx";
// import moment from "moment";

const OrderDetails = () => {
  // const dispatch = useDispatch();

  // const orderDetails = useSelector((state) => state.orderDetails);
  // const { loading, error, order } = orderDetails;

  // const orderDelivered = useSelector((state) => state.orderDelivered);
  // const { loading: deliveredLoading, success: deliveredSuccess } =
  //   orderDelivered;

  // useEffect(() => {
  //   dispatch(getOrderDetails(id));
  // }, [dispatch, id, deliveredSuccess]);

  // const handleDelivered = () => {
  //   dispatch(orderDeliver(order));
  // };

  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-dark text-white">
          Back To Orders
        </Link>
      </div>
      {/* {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="alert-danger">{error}</Error>
      ) : ( */}
      <>
        <div className="card">
          <header className="card-header p-3 Header-green">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calender-alt mx-2"></i>
                  <b className="text-white">
                    {/* {moment(order.createdAt).format("llll")} */}
                  </b>
                </span>
                <br />
                {/* <small className="text-white mx-3">Order Id: {order._id}</small> */}
              </div>
              <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                <select
                  className="form-select d-inline-block"
                  style={{ maxWidth: "200px" }}
                >
                  <option>Change Status</option>
                  <option>Awaiting Payment</option>
                  <option>Confirmed </option>
                  <option>Shipped </option>
                  <option>Delivered </option>
                </select>
                <Link className="btn btn-success ms-2" to="#">
                  <i className="fas fa-print"></i>
                </Link>
              </div>
            </div>
          </header>
          <div className="card-body">
            {/* order info */}
            {/* <OrderDetailInfo order={order} /> */}
            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  {/* <OrderDetailProducts order={order} loading={loading} /> */}
                </div>
              </div>
              {/* payment info */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light">
                  {/* {order?.isDelivered ? ( */}
                  <button className="btn btn-success col-12">
                    DELIVERED AT
                    {/* ( */}
                    {/* {moment(order.deliveredAt).format("MMM Do YY")}) */}
                  </button>
                  {/* ) : ( */}
                  <>
                    {/* {deliveredLoading && <Loading />} */}
                    <button
                      className="btn btn-dark col-12"
                      // onClick={handleDelivered}
                    >
                      MARK AS DELIVERED
                    </button>
                  </>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </section>
  );
};

export default OrderDetails;
