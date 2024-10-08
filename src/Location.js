import React from "react";
import  Navbar  from "./Navbar";
function location()
{
    return(
<>
<Navbar/>
<section class="text-center">



  

    <h3 class="mb-5" style={{color:"white"}}>Contact us</h3>
    <div className="row">
        <div className="col-lg-5">
          <iframe
            title="Google Maps Location of Broadway-Lafayette St"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.5012064884154!2d76.22717811370431!3d32.211473366723204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5a36c63ee137%3A0x10c94fd0c20f6509!2sDargela%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1715963164459!5m2!1sen!2sin" 
            className="h-100 w-100"
            style={{ border: '0', loading: 'lazy' }}
          ></iframe>
        </div>
    <div class="col-lg-7">
      <form>
        <div class="row" style={{color:"white"}}>
          <div class="col-md-9">
            <div class="row mb-4">
              <div class="col-md-6 mb-4 mb-md-0">
                <div data-mdb-input-init class="form-outline">
                  <input type="text" id="form3Example1" class="form-control" />
                  <label class="form-label" for="form3Example1" style={{color:"white"}}>First name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div data-mdb-input-init class="form-outline">
                  <input type="email" id="form3Example2" class="form-control" />
                  <label class="form-label" for="form3Example2">Email Address</label>
                </div>
              </div>
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="text" id="form3Example3" class="form-control" />
              <label class="form-label" for="form3Example3">Subject</label>
            </div>
            <div data-mdb-input-init class="form-outline mb-4">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>
            <div class="text-center text-md-start">
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary mb-5 mb-md-0">
                Send
              </button>
            </div>
          </div>
          <div class="col-md-3" style={{color:"white"}}>
            <ul class="list-unstyled">
              <li>
                <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
                <p><small>New York, NY 10012, USA</small></p>
              </li>
              <li>
                <i class="fas fa-phone fa-2x text-primary"></i>
                <p><small>+ 01 234 567 89</small></p>
              </li>
              <li>
                <i class="fas fa-envelope fa-2x text-primary"></i>
                <p><small>contact@gmail.com</small></p>
              </li>
            </ul>
          </div>
        </div>
      </form>

    </div>
  </div>
</section>

</>

    )
}
export default location;