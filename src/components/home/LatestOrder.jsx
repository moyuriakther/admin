import moment from "moment";
import { Link } from "react-router-dom";
import Loading from "../loadingErrors/Loading";
import Error from "../loadingErrors/Error";

const LatestOrder = ({ orders, loading, error }) => {
  return (
    <div className="card-body">
      <h4 className="card-title">New Order</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="alert-danger">{error}</Error>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders?.slice(0, 5).map((order, i) => (
                <tr key={i}>
                  <td>
                    <b>{order?.user?.name}</b>
                  </td>
                  <td>{order?.user?.email}</td>
                  <td>$ {order?.totalPrice}</td>
                  <td>
                    {order?.isPaid ? (
                      <span className="badge rounded-pill alert-success">
                        Paid At {moment(order.paidAt).format("MMM Do YY")}
                      </span>
                    ) : (
                      <span className="badge rounded-pill alert-danger">
                        Not Paid
                      </span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).calendar()}</td>
                  <td className="d-flex justify-content-end align-items-center">
                    <Link className="text-success" to={`/order/${order._id}`}>
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
