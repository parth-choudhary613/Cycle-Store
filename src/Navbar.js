import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { getCartTotal } from "./feature/cartSlice";
import "./Navbar.css";

function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]); // Added dispatch to dependency array to avoid warning

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  function Navbar() {
    return (
      <div className="NavBack">
        <nav className="navbar navbar-expand-lg p-3" id="headerNav">
          <div className="container-fluid">
            <Link className="navbar-brand d-block d-lg-none" to="#">
              <img src="./Images/logo.png" height="100vh" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse container-fluid navbar-collapse NavComponents"
              style={{ fontWeight: "bold" }}
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    to="#"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    to="#"
                  >
                    Accessories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    to="#"
                  >
                    Team
                  </Link>
                </li>
                <li className="d-none d-lg-block">
                  <Link className="mx-2" to="#">
                    <img src="./Images/logo.png" height="100vh" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    to="#"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    to="/location"
                  >
                    Location
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link mx-2 dropdown-toggle"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Other Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    data-aos="fade-down"
                    to="/Cart"
                  >
                    <h3>
                      <FaOpencart />({totalQuantity})
                    </h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {/* Other components and content */}
    </div>
  );
}

export default App;
