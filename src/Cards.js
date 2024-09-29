import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./feature/cartSlice";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Cards() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    
      <section id="header" className="jumbotron text-center mt-5">
        <h1 className="display-5" style={{ color: "grey" }}>
          YOUR RIDES
        </h1>
        <p className="lead" style={{ color: "grey" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </section>

      <section id="gallery">
        <div className="container">
          <div className="row mt-5">
            {items.map((item) => (
              <div className="col-lg-4 mb-4" key={item.id}>
                <div
                  className="card"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  style={{ color: "grey", borderRadius: "1px" }}
                >
                  <img src={item.img} alt="" className="card-img-top" />
               
                  <div className="card-body" style={{ backgroundColor: "black" }}>
  <h5 className="card-title">{item.title}</h5>
  <p className="card-text">{item.price}</p>
  <div className="p-4">
    <button
      className="btn btn-outline-light btn-sm me-2" // Added margin-end class here
      onClick={() => dispatch(addToCart(item))}
    >
      Add to Cart
    </button>
    <Link to="" className="btn btn-outline-light btn-sm">
      Read More
    </Link>
  </div>
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
