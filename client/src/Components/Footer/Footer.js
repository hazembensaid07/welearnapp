import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dark-logo.png";
import handleScroll from "../scroll.js";
const Footer = () => {
  return (
    <div>
      <section className="footer-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-8 col-xl-3 col-sm-6">
              <div className="widget footer-about mb-5 mb-lg-0">
                <h5 className="widget-title text-gray">About us</h5>
                <ul className="list-unstyled footer-info">
                  <li>
                    <span>Ph:</span>+(216) 53307672
                  </li>
                  <li>
                    <span>Email:</span>welearn@gmail.com
                  </li>
                  <li>
                    <span>Location:</span> Lac 1
                  </li>
                </ul>
                <ul className="list-inline footer-socials">
                  <li className="list-inline-item">Follow us :</li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 ml-auto col-lg-7 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-xl-4 col-sm-4 col-md-4 ">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title text-gray">Explore</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <Link onClick={handleScroll} to="/aboutUs">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleScroll} to="/contact">
                          Contact us
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleScroll} to="/blog">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-sm-4 col-md-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title text-gray">Categories</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <Link onClick={handleScroll} to="/courses">
                          Web Development{" "}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleScroll} to="/courses">
                          Mobile Development{" "}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleScroll} to="/courses">
                          Game Development{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-4 col-md-12">
                <div className="footer-logo text-lg-left text-center mb-4 mb-lg-0">
                  <Link onClick={handleScroll} to="/">
                    {" "}
                    <img src={logo} alt="EduHash" className="img-fluid" />{" "}
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-12">
                <div className="copyright text-lg-right text-center">
                  <p>© Copyright WeLearn Team </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
