import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCourseById } from "../../JS/actions/course";
import { addCourse } from "../../JS/actions/courseEnroll";
import handleScroll from "../scroll.js";

const CourseDetails = ({ location }) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseReducer.course);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);

  console.log(location);
  useEffect(() => {
    dispatch(getCourseById(location.state.id));
  }, []);
  return (
    <div>
      {loadCourses ? (
        <h1> loading please wait</h1>
      ) : (
        <div>
          <section className="page-header">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-8">
                  <div className="title-block">
                    <h1>{course.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="page-wrapper edutim-course-single edutim-course-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="course-thumbnail">
                    <img
                      src="assets/images/course/course-lg.jpg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>

                  <div
                    className="tab-content edutim-course-content"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="single-course-details ">
                        <h4 className="course-title">Overview</h4>
                        <p>{course.overview}</p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-feedback"
                      role="tabpanel"
                      aria-labelledby="nav-feedback-tab"
                    ></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* Course Sidebar start */}
                  <div className="course-sidebar">
                    <div className="course-widget course-details-info">
                      <ul>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="fa fa-money-bill" />
                              Price :
                            </span>

                            <h4 className="course-price">
                              <span className="price">{course.price}</span>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="far fa-user" />
                              Instructor :
                            </span>
                            {course.instructor}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="far fa-file-alt" />
                              Lectures :
                            </span>
                            {course.lectures}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="fa fa-user" />
                              Enrolled :
                            </span>
                            {course.enrolled}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="fa fa-clock" />
                              Duration :
                            </span>
                            {course.duration}
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between align-items-center">
                            <span>
                              <i className="far fa-calendar" />
                              Updated :
                            </span>
                            {course.update}
                          </div>
                        </li>
                      </ul>
                      <div className="buy-btn">
                        <Link
                          onClick={handleScroll}
                          className="read-more"
                          to={{
                            pathname: `/myCourses`,
                          }}
                        >
                          <button
                            className="button button-enroll-course btn btn-primary"
                            onClick={() => {
                              const user = localStorage.getItem("user");
                              const enroll = {};
                              enroll.user = user;
                              console.log(typeof user);

                              enroll.course = course;
                              console.log(user);
                              console.log(typeof enroll.user);

                              dispatch(addCourse(enroll));
                            }}
                          >
                            Enroll Course
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Course Sidebar end */}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
