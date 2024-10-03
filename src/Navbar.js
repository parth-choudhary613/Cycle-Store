import React, { useState, useEffect } from "react";
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

  // State to toggle the menu on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function Navbar() {
    return (
      <>
        <div className="bg-[#1f2a39]">
          <nav className="p-4 bg-black shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <Link className="block lg:hidden border border-white" to="#">
                <img src="./Images/logo.png" className="h-12" alt="Logo" />
              </Link>
              <button
                className="lg:hidden text-white"
                type="button"
                aria-label="Toggle navigation"
                onClick={toggleMenu} // Toggle the menu when clicked
              >
                <span className="text-xl">☰</span>
              </button>

              {/* Centered Navbar Links */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } lg:flex w-full justify-center items-center space-x-8 text-white`}
                id="navbarNavDropdown"
              >
                <ul className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-12">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      to="/Home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      to="#"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      to="#"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      to="#"
                    >
                      Team
                    </Link>
                  </li>

                  {/* Centered logo */}
                  <li className="hidden lg:block">
                    <Link to="#">
                      <img
                        src="./Images/logo.png"
                        className="h-16 mx-auto"
                        alt="Logo"
                      />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      to="#"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      to="/location"
                    >
                      Location
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link flex items-center"
                      data-aos="fade-down"
                      to="/Cart"
                    >
                      <h3 className="text-xl">
                        <FaOpencart /> ({totalQuantity})
                      </h3>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
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
