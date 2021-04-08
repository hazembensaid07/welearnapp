import React from "react";
import { Link } from "react-router-dom";
import courseimg from "../../assets/images/course/course1.jpg";
import handleScroll from "../scroll.js";
const CourseByCategory = () => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>Category Name</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding course">
        <div className="course-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="topbar-search">
                  <form method="get" action="#">
                    <input
                      type="text"
                      placeholder="Search our courses"
                      className="form-control"
                    />
                    <label>
                      <i className="fa fa-search" />
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
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
                    <Link onClick={handleScroll} to="/courseDetails">
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
          <div className="row">
            <div className="col-lg-12">
              <nav className="post-navigation text-center">
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
                  <li className="page-num">
                    <a className="page-url" href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseByCategory;
