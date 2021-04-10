import React from "react";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";
const Categories = () => {
  return (
    <div>
      <section className="section-padding course-category">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="section-heading center-heading">
                <span className="subheading">Our Categories</span>
                <h3>Explore by category</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-xl-4 col-lg-4">
              <div class="course-block">
                <div class="course-img">
                  <img src="Images/webdev.jpg" alt="" class="img-fluid" />
                </div>

                <div class="course-content">
                  <h4>
                    <Link
                      onClick={handleScroll}
                      to={{
                        pathname: `/courses`,
                        state: { category: "web development" },
                      }}
                    >
                      Web Development{" "}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4">
              <div class="course-block">
                <div class="course-img">
                  <img src="Images/gamedev.jpg" alt="" class="img-fluid" />
                </div>

                <div class="course-content">
                  <h4>
                    <Link
                      onClick={handleScroll}
                      to={{
                        pathname: `/courses`,
                        state: { category: "mobile development " },
                      }}
                    >
                      Mobile Development{" "}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4">
              <div class="course-block">
                <div class="course-img">
                  <img src="Images/mobiledev.jpg" alt="" class="img-fluid" />
                </div>

                <div class="course-content">
                  <h4>
                    <Link
                      onClick={handleScroll}
                      to={{
                        pathname: `/courses`,
                        state: { category: "game development" },
                      }}
                    >
                      Game Development{" "}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
