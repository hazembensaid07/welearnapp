import React from "react";
import { Link } from "react-router-dom";
import courseimg from "../../assets/images/course/course1.jpg";
const TrendingCourses = () => {
  return (
    <div>
      <section className="section-padding course-grid bg-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="section-heading center-heading">
                <span className="subheading">Trending Courses</span>
                <h3>4 New Online Courses</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <ul className="course-filter">
              <li className="active">
                <a href="#" data-filter="*">
                  {" "}
                  All
                </a>
              </li>
              <li>
                <a href="#" data-filter=".cat1">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" data-filter=".cat2">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" data-filter=".cat3">
                  Game Development
                </a>
              </li>
            </ul>
          </div>
          <div className="row course-gallery ">
            <div className="course-item cat1 cat3 col-lg-4 col-md-6">
              <div className="course-block">
                <div className="course-img">
                  <img src={courseimg} alt="" className="img-fluid" />
                  <div className="course-price2">$100</div>
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="course-student">
                      <i className="fa fa-user-alt" />
                      340 Students
                    </span>
                    <span className="course-duration">
                      <i className="far fa-file-alt" />
                      82 Lessons
                    </span>
                    <span className="course-label">new</span>
                  </div>
                  <h4>
                    <Link to="/courseDetails">
                      React – The Complete Guide (React Router)
                    </Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis, alias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingCourses;
