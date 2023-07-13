import { Link } from "react-router-dom";

const CategoryTable = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input type="checkbox" value="" className="form-check-input" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="form-check">
                <input type="checkbox" value="" className="form-check-input" />
              </div>
            </td>
            <td>1</td>
            <td>
              <b>Men Clothes</b>
            </td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-light"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link to="#" className="dropdown-item">
                    Edit info
                  </Link>
                  <Link to="#" className="dropdown-item text-danger">
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
