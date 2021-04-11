import React from "react";

import Welcome from "../Components/Welcome/Welcome";
import Join from "../Components/Join/Join";
import Stats from "../Components/Stats/Stats";
import Categories from "../Components/Categories/Categories";

import Testimonials from "../Components/Testimonials/Testimonials";
import BlogAffiche from "../Components/BlogAffiche/BlogAffiche";

const Homeauth = () => {
  return (
    <div>
      <Categories />

      <Stats />
      <BlogAffiche />
    </div>
  );
};

export default Homeauth;
