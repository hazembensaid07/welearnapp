import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/bg/banner2.jpg";
import img2 from "../../assets/images/bg/wallpaper.jpg";
import img3 from "../../assets/images/bg/bing.png";
import handleScroll from "../scroll.js";
const Join = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="row ">
                <div className="col-xl-6 col-lg-6  col-md-6 col-sm-6">
                  <div className="about-imgbox">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                  <div className="about-imgbox">
                    <img src={img2} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="about-imgbox mt-5">
                    <img src={img3} alt="" className="img-fluid" />
                  </div>
                  <div className="about-imgbox">
                    <img
                      src="assets/images/bg/about-img.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="section-heading pl-lg-5 ">
                <span className="subheading">Self Development</span>
                <h3>
                  Get Instant Access To <span> Expert solution</span>
                </h3>
                <p className="mb-4">
                  The ultimate planning solution for busy women who want to
                  reach their personal goals.Effortless comfortable eye-catching
                  unique detail.Take the control of their life back and start
                  doing things{" "}
                </p>
                <Link
                  to="/signUp"
                  onClick={handleScroll}
                  className="btn btn-solid-border"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
