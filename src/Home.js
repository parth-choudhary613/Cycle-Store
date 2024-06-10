import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
function Home(){
return(
<>
<Navbar/>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="100">
            <img
              src=".\Images\image1.jpg"
              className="rounded mx-auto d-block w-50 mt-4"
              alt="..."
              />
            <div className="carousel-caption d-none d-md-block text-end fw-bold text-light">
              <h2 style={{ opacity: 10 }}>Upcoming Designs</h2>
              <p class="d-inline-flex gap-1">
                <a
                  class="btn btn-outline-light "
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  >
                  Learn More
                </a>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                    >
                    Some placeholder content for the first collapse<br></br>
                    component of this multi-collapse example. This panel is<br></br>
                    hidden by default but revealed when the user activates the
                    relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="100">
            <img
              src=".\Images\image4.jpg"
              className="rounded mx-auto d-block w-50  mt-4"
              alt="..."
              />
            <div className="carousel-caption d-none d-md-block fw-bold text-light ">
              <h2 style={{ opacity: 10 }}>Upcoming Designs</h2>
              <p class="d-inline-flex gap-1">
                <a
                  class="btn btn-outline-light "
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  >
                  Learn More
                </a>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                    >
                    Some placeholder content for the first collapse<br></br>
                    component of this multi-collapse example. This panel is<br></br>
                    hidden by default but revealed when the user activates the
                    relevant trigger.
                  </div>
                </div>
           
            </div>
          </div>
          </div>
          <div className="carousel-item" data-bs-interval="100">
            <img
              src=".\Images\image3.jpg"
              className="rounded mx-auto d-block w-50  mt-4"
              alt="..."
              />
            <div className="carousel-caption d-none d-md-block fw-bold text-light">
              <h2 style={{ opacity: 10 }}>Upcoming Designs</h2>
              <p class="d-inline-flex gap-1">
                <a
                  class="btn btn-outline-light "
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Learn More
                </a>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                    >
                    Some placeholder content for the first collapse<br></br>
                    component of this multi-collapse example. This panel is<br></br>
                    hidden by default but revealed when the user activates the
                    relevant trigger.
                  </div>
                </div>
                </div>
          
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <nav className="bg-dark navbar-dark">
        <div className="container">
        
        </div>
      </nav>
<Cards/>
</>

)

}
export default Home;