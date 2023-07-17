import favicon from "../../images/favicon.png";
const SingleUser = (props) => {
  const { name, isAdmin, email } = props.user || {};
  return (
    <div className="col">
      <div className="card card-user shadow-sm">
        <div className="card-header">
          <img className="img-md img-avatar" src={favicon} alt="User pic" />
        </div>
        <div className="card-body">
          <h5 className="card-title mt-5">
            <p className="m-0">{name}</p>
          </h5>
          <div className="card-text text-muted">
            {isAdmin ? "Admin" : "Customer"}
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
