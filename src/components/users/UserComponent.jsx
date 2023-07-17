// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAllUsersListQuery } from "../../features/auth/authApi";
import Loading from "../loadingErrors/Loading.jsx";
import Error from "../loadingErrors/Error.jsx";
import SingleUser from "./SingleUser";

const UserComponent = () => {
  const { data: users, isLoading, isError, error } = useAllUsersListQuery();
  // decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error variant="alert-danger">{error}</Error>;
  } else if (!isLoading && !isError && users?.length === 0) {
    content = <div>Users Not available</div>;
  } else if (!isLoading && !isError && users?.length > 0) {
    content = (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {users.map((user, i) => (
          <SingleUser user={user} key={i} />
        ))}
      </div>
    );
  }

  // useEffect(() => {
  //   dispatch(allUsersList());
  // }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i>
            Create new
          </Link>
        </div>
      </div>
      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
                <option>Show all</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status:all</option>
                <option>Active only</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>
        {/* card */}
        <div className="card-body">
          {content}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item ">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
