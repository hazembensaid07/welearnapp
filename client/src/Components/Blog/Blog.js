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
              <div className="col-lg-8 col-xl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
