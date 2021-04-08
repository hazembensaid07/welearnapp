import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/blog/web.jpeg";
import img2 from "../../assets/images/blog/marketing.jpg";
import img3 from "../../assets/images/blog/mobile.jpg";
import handleScroll from "../scroll.js";
const BlogAffiche = () => {
  return (
    <div>
      <section className="blog-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="section-heading center-heading">
                <span className="subheading">Blog News</span>
                <h3>Latest From The Blog</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-6 ">
              <article className="blog-post-item">
                <div className="post-thumb">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">Written by Admin</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      March 15, 2021
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link onClick={handleScroll} to="/blogEl">
                      How to become a Web Developer
                    </Link>
                  </h4>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <article className="blog-post-item">
                <div className="post-thumb">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">Written by Admin</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      March 15, 2021
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link onClick={handleScroll} to="/blogEl">
                      How to become a best sale marketer
                    </Link>
                  </h4>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <article className="blog-post-item">
                <div className="post-thumb">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">Written by Admin</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      March 15, 2021
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link onClick={handleScroll} to="/blogEl">
                      How to become a Mobile Developer
                    </Link>
                  </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogAffiche;
