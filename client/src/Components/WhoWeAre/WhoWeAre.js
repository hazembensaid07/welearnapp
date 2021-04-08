import React from "react";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";
import img1 from "../../assets/images/bg/about.jpg";
const WhoWeAre = () => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>Who we are : </h1>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <p>
                      {" "}
                      An E-Learning platform that helps people to learn
                      development
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section start */}
      <section className="features pt-100">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
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
            <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
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
            <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-video-camera" />
                </div>
                <div className="feature-text">
                  <h4>Remote Learning</h4>
                  <p>
                    Develop skills for career of various majors including
                    language
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="flaticon-help" />
                </div>
                <div className="feature-text">
                  <h4>Life Time Support</h4>
                  <p>
                    Develop skills for career of various majors including
                    language
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section End */}
      {/* About Section Start */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="video-block">
                <img src={img1} alt="" className="img-fluid" />
                <a href="#" className="video-icon">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 pl-5 col-lg-6">
              <div className="section-heading mt-4 mt-lg-0 ">
                <span className="subheading">Self Development Course</span>
                <h3>
                  Get Instant Access To <span> Expert solution</span>
                </h3>
                <p>
                  The ultimate planning solution for busy women who want to
                  reach their personal goals.Effortless comfortable eye-catching
                  unique detail{" "}
                </p>
              </div>
              <ul className="about-features">
                <li>
                  <i className="fa fa-check" />
                  <h5>High Quality Video Details</h5>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <h5>Powerful Audiance</h5>
                </li>
                <li>
                  <i className="fa fa-check" />
                  <h5>Premium Content Worldwide</h5>
                </li>
              </ul>
              <Link
                onClick={handleScroll}
                to="/signUp"
                className="btn btn-main"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
