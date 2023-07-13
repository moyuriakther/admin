import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import Error from "../components/loadingErrors/Error";
import Loading from "../components/loadingErrors/Loading";
import Toast from "../components/loadingErrors/Toast";
import { useAdminLoginMutation } from "../features/auth/authApi.js";

const LoginScreen = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminLogin, { isError, isLoading, error, isSuccess }] =
    useAdminLoginMutation();
  // console.log(isError, isSuccess, isLoading, error);
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    adminLogin({ email, password });
  };
  return (
    <>
      <Toast />
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          {isError && <Error variant="alert-danger">{error}</Error>}
          {isLoading && <Loading />}
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                type="email"
                value={email}
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                required
              />
            </div>
            <div className="mb-3">
              {/* <input
                className="form-control btn-primary"
                type="submit"
                value="login"
              /> */}
              <button className="form-control btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
