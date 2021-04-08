import React from "react";

import Welcome from "../Components/Welcome/Welcome";
import Join from "../Components/Join/Join";
import Stats from "../Components/Stats/Stats";
import Categories from "../Components/Categories/Categories";
import TrendingCourses from "../Components/TrendingCourses/TrendingCourses";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogAffiche from "../Components/BlogAffiche/BlogAffiche";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Join />
      <Categories />
      <TrendingCourses />
      <Testimonials />
      <Stats />
      <BlogAffiche />
    </div>
  );
};

export default Home;
