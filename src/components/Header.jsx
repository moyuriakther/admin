import { useEffect, useState } from "react";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
import fevIcon from "../images/favicon.png";
import { useDispatch } from "react-redux";
import { updateFilters } from "../features/searchSlice";
import { adminLoggedOut } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("bo");
    $("[data-trigger]").click("click", function (e) {
      console.log("trigger");
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });
    $(".btn-aside-minimize").click("click", function () {
      if (window.innerWidth < 768) {
        console.log("here");
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        console.log("body");
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const handleLogout = () => {
    dispatch(adminLoggedOut());
    localStorage.clear();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFilters({ search: searchValue }));
    console.log(e.target.value);
  };
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              list="search-terms"
              type="text"
              className="form-control"
              placeholder="Search term"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* <button className="btn btn-light bg" type="button">
              <i className="far fa-search"></i>
            </button> */}
          </div>
          {/* <datalist id="search-terms">
            <option value="Products">Products</option>
            <option value="New orders">New orders</option>
            <option value="Apple iphone">Apple iphone</option>
            <option value="Moyuri akther">Moyuri akther</option>
          </datalist> */}
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link btn-icon" title="Dark mode" to="#">
              <i className="fas fa-moon"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#">
              <i className="fas fa-bell"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              english
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img className="img-xs rounded-circle" alt="User" src={fevIcon} />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My Profile
              </Link>
              <Link className="dropdown-item" to="#">
                Setting
              </Link>
              <Link
                className="dropdown-item text-danger"
                to="#"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
