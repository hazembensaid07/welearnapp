import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../JS/actions/blog";
import { Link } from "react-router-dom";
import Welcome from "../Components/Welcome/Welcome";
import Join from "../Components/Join/Join";
import Stats from "../Components/Stats/Stats";
import Categories from "../Components/Categories/Categories";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogAffiche from "../Components/BlogAffiche/BlogAffiche";

const Home = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogReducer.blog);
  const loadBlog = useSelector((state) => state.blogReducer.loadBlog);

  useEffect(() => {
    dispatch(getBlog());
  }, []);
  return (
    <div>
      <Welcome />
      <Join />
      <Categories />

      <Testimonials />
      <Stats />

      {loadBlog ? (
        <h2>loading</h2>
      ) : blog.length == 0 ? (
        <h2>there is no articles yet</h2>
      ) : (
        <BlogAffiche article={blog} />
      )}
    </div>
  );
};

export default Home;
