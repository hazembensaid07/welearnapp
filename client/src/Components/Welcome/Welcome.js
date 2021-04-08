import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/banner/hero-img.png";
import "./Welcome.css";
import handleScroll from "../scroll.js";
const Welcome = () => {
  return (
    <div>
      <section className="banner-2 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-xl-6 col-lg-6">
              <div className="banner-content">
                <span className="subheading">Expert instruction</span>
                <h1>Convenient easy way of learning new skills!</h1>
                <p>
                  The ultimate planning solution for busy women who want to
                  reach their personal goals.Effortless comfortable eye-catching
                  unique detail{" "}
                </p>
                <Link
                  onClick={handleScroll}
                  to="signUp"
                  className="btn btn-main"
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="col-md-12 col-xl-6 col-lg-6">
              <div className="banner-img-round mt-5 mt-lg-0">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </section>
      {/* Banner Section End */}
      {/* Feature section start */}
      <section className="feature-4">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-flag" />
                </div>
                <div className="feature-text">
                  <h4>Expert Teacher</h4>
                  <p>
                    Develop skills for career of various majors including
                    computer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-layers" />
                </div>
                <div className="feature-text">
                  <h4>Self Development</h4>
                  <p>
                    Develop skills for career of various majors including
                    computer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-video-camera" />
                </div>
                <div className="feature-text">
                  <h4>Remote Learning</h4>
                  <p>Develop skills for career of various majors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
