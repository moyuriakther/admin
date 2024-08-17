// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <aside
        // style={{ width: isOpen ? "30px" : "70px" }}
        className="navbar-aside show"
        id="offcanvas_aside"
      >
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              // style={{ display: isOpen ? "block" : "none" }}
              src={logo}
              className="logo"
              alt="logo"
            />
          </Link>
          <div>
            <button
              // style={{ marginLeft: isOpen ? "30px" : "0px" }}
              className="btn btn-icon btn-aside-minimize"
              // onClick={toggle}
            >
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/products"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add Product</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/orders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
            {/* <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">Sellers</span>
              </NavLink>
            </li> */}
            {/* <li className="menu-item">
              <NavLink
                className="menu-link"
                activeclassname="active"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Transactions</span>
              </NavLink>
            </li> */}
          </ul>
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
