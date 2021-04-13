import React from "react";
import { Link } from "react-router-dom";

import handleScroll from "../scroll.js";
const BlogAffiche = ({ article }) => {
  const b1 = article[0];
  const b2 = article[1];
  const b3 = article[2];
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
                  <img src={b1.imgSrc} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">Written by {b1.writer}</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      {b1.date}
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link
                      onClick={handleScroll}
                      className="read-more"
                      to={{
                        pathname: `/blogEl`,
                        state: { article: b1 },
                      }}
                    >
                      {b1.title}
                    </Link>
                  </h4>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <article className="blog-post-item">
                <div className="post-thumb">
                  <img src={b2.imgSrc} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">Written by {b2.writer}</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      {b2.date}
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link
                      onClick={handleScroll}
                      className="read-more"
                      to={{
                        pathname: `/blogEl`,
                        state: { article: b2 },
                      }}
                    >
                      {b2.title}
                    </Link>
                  </h4>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <article className="blog-post-item">
                <div className="post-thumb">
                  <img src={b3.imgSrc} alt="" className="img-fluid" />
                </div>
                <div className="post-item mt-4">
                  <div className="post-meta">
                    <span className="post-author">written {b3.writer}</span>
                    <span className="post-date">
                      <i className="fa fa-calendar-alt mr-2" />
                      {b3.dates}
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link
                      onClick={handleScroll}
                      className="read-more"
                      to={{
                        pathname: `/blogEl`,
                        state: { article: b3 },
                      }}
                    >
                      {b3.title}
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
