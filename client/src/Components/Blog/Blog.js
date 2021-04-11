import { React, useState, useEffect } from "react";
import Articleel from "./Articleel";

import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../JS/actions/blog";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";
const Blog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogReducer.blog);
  const loadBlog = useSelector((state) => state.blogReducer.loadBlog);

  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <div>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Blog</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {loadBlog ? (
          <h2>loading</h2>
        ) : blog.length == 0 ? (
          <h2>there is no articles yet</h2>
        ) : (
          blog.map((el) => <Articleel key={el._id} article={el} />)
        )}

        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <nav className="post-navigation">
                  <ul>
                    <li className="page-num active" aria-current="page">
                      <span className="page-url">
                        1<span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-num">
                      <a className="page-url" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-num">
                      <a className="page-url" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="blog-sidebar mt-5 mt-lg-0">
                  <div className="widget widget_latest_post">
                    <h4 className="widget-title">Latest Posts</h4>
                    <ul className="recent-posts">
                      <li>
                        <div className="widget-post-body">
                          <h6>
                            {" "}
                            <Link onClick={handleScroll} to="/blogEl">
                              How to become a Mobile Developer
                            </Link>
                          </h6>
                          <span>10 april 2020</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Web Development
                        </Link>
                        (1)
                      </li>
                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Mobile Development
                        </Link>
                        (1)
                      </li>

                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Game Development
                        </Link>
                        (1)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
