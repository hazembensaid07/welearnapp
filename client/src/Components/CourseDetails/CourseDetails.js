import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCourseById } from "../../JS/actions/course";

const CourseDetails = ({ id }) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseReducer.course);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);
  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch]);

  return (
    <div>
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
                  >
                    <div id="course-reviews">
                      <h3 className="course-review-head">Reviews</h3>
                      <ul className="course-reviews-list">
                        <li>
                          <div className="course-review">
                            <div className="course-single-review">
                              <div className="row">
                                <div className="col-lg-3 col-md-3">
                                  <div className="user-image">
                                    <img
                                      src="assets/images/blog/author.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                  <div className="user-content user-review-content">
                                    <h4 className="user-name">eduhash</h4>
                                    <div className="rating review-stars-rated">
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star-half" />
                                      </a>
                                    </div>
                                    <p className="review-title">
                                      Cover all topicc
                                    </p>
                                    <div className="review-text">
                                      <div className="review-content">
                                        The course identify things we want to
                                        change and then figure out the things
                                        that need to be done to create the
                                        desired outcome. The course helped me in
                                        clearly define problems and generate a
                                        wider variety of quality solutions.
                                        Support more structures analysis of
                                        options leading to better decisions.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="course-review">
                            <div className="course-single-review">
                              <div className="row">
                                <div className="col-lg-3 col-md-3">
                                  <div className="user-image">
                                    <img
                                      src="assets/images/blog/author.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                  <div className="user-content user-review-content">
                                    <h4 className="user-name">eduhash</h4>
                                    <div className="rating review-stars-rated">
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star-half" />
                                      </a>
                                    </div>
                                    <p className="review-title">
                                      Cover all topicc
                                    </p>
                                    <div className="review-text">
                                      <div className="review-content">
                                        The course identify things we want to
                                        change and then figure out the things
                                        that need to be done to create the
                                        desired outcome. The course helped me in
                                        clearly define problems and generate a
                                        wider variety of quality solutions.
                                        Support more structures analysis of
                                        options leading to better decisions.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                          <a href="#" className="d-inline-block">
                            <h4 className="course-price">
                              {" "}
                              <span className="price">$120.00</span>
                            </h4>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-user" />
                            Instructor :
                          </span>
                          <a href="#" className="d-inline-block" />
                          <a href="#">Eduhash</a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-file-alt" />
                            Lectures :
                          </span>
                          2
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fa fa-user" />
                            Enrolled :
                          </span>
                          <a href="#" className="d-inline-block">
                            0
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fa fa-clock" />
                            Duration :
                          </span>
                          0 week
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar" />
                            Updated :
                          </span>
                          October 15, 2020
                        </div>
                      </li>
                    </ul>
                    <div className="buy-btn">
                      <button className="button button-enroll-course btn btn-primary">
                        Enroll Course
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Sidebar end */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
