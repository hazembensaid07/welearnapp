import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCourses } from "../../JS/actions/course";
import CourseCard from "./CourseCard";
const CourseByCategory = ({ location }) => {
  const category = location.state.category;
  const courses = useSelector((state) => state.courseReducer.courses);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses(category));
  }, [dispatch]);
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>{category}</h1>
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
          {loadCourses ? (
            <h1>estenaaaaaaa</h1>
          ) : courses.length === 0 ? (
            <h1>no</h1>
          ) : (
            courses.map((course) => (
              <CourseCard course={course} key={course._id} />
            ))
          )}

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
