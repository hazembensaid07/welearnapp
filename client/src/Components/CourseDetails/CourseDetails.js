import React from "react";
import img1 from "../../assets/images/course/course1.jpg";
import author from "../../assets/images/blog/author.jpg";

import course1 from "../../assets/images/course/course-sm1.jpg";
import course2 from "../../assets/images/course/course-sm2.jpg";
import course3 from "../../assets/images/course/course-sm3.jpg";

const CourseDetails = () => {
  return (
    <div>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Mastering PHP from zero to hero</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item">
                      Mastering PHP from zero to hero
                    </li>
                  </ul>
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
                <nav className="course-single-tabs learn-press-nav-tabs">
                  <div
                    className="nav nav-tabs  course-nav"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Overview
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-topics-tab"
                      data-toggle="tab"
                      href="#nav-topics"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Curriculam
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-instructor-tab"
                      data-toggle="tab"
                      href="#nav-instructor"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Instructor
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-feedback-tab"
                      data-toggle="tab"
                      href="#nav-feedback"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </div>
                </nav>
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
                      <p>
                        Knowing PHP has allowed me to make enough money to stay
                        home and make courses like this one for students all
                        over the world. Being a PHP developer can allow anyone
                        to make really good money online and offline, developing
                        dynamic applications. Knowing PHP will allow you to
                        build web applications, websites or Content Management
                        systems, like WordPress, Facebook, Twitter or even
                        Google. There is no limit to what you can do with this
                        knowledge. PHP is one of the most important web
                        programming languages to learn, and knowing it, will
                        give you SUPER POWERS in the web
                      </p>
                      <div className="course-widget course-info">
                        <h4 className="course-title">What You will Learn?</h4>
                        <ul>
                          <li>
                            <i className="fa fa-check" />
                            Clean up face imperfections, improve and repair
                            photos
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Remove people or objects from photos
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Master selections, layers, and working with the
                            layers panel
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Use creative effects to design stunning text styles
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            working with the layers panel
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Cut away a person from their background
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-topics"
                    role="tabpanel"
                    aria-labelledby="nav-topics-tab"
                  >
                    <div className="edutim-course-curriculum ">
                      <div className="curriculum-scrollable">
                        <ul className="curriculum-sections">
                          <li className="section">
                            <div className="section-header">
                              <div className="section-left">
                                <h5 className="section-title">Section 1</h5>
                                <p className="section-desc">
                                  Dacere agemusque constantius concessis elit
                                  videmusne quia stoici constructio
                                  dissimillimas audiunt homerus commendationes
                                </p>
                              </div>
                            </div>
                            <ul className="section-content">
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Lesson 1</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      10 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Lesson 2</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      30 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item course-item-lp_quiz course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Quiz 1</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta count-questions">
                                      14 questions
                                    </span>
                                    <span className="item-meta duration">
                                      10 min
                                    </span>
                                    <i className="fa item-meta course-item-status trans" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="section">
                            <div className="section-header">
                              <div className="section-left">
                                <h5 className="section-title">Section 2</h5>
                                <p className="section-desc">
                                  Dacere agemusque constantius concessis elit
                                  videmusne quia stoici constructio
                                  dissimillimas audiunt homerus commendationes
                                </p>
                              </div>
                            </div>
                            <ul className="section-content">
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Lesson 1</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      10 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-instructor"
                    role="tabpanel"
                    aria-labelledby="nav-instructor-tab"
                  >
                    {/* Course instructor start */}
                    <div className="courses-instructor">
                      <div className="single-instructor-box">
                        <div className="row align-items-center">
                          <div className="col-lg-4 col-md-4">
                            <div className="instructor-image">
                              <img
                                src="assets/images/blog/author.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <div className="instructor-content">
                              <h4>
                                <a href="#">EduHash</a>
                              </h4>
                              <span className="sub-title">
                                <p>Web Developer</p>
                              </span>
                              <p>
                                Jone Smit is a celebrated photographer, author,
                                and writer who brings passion to everything he
                                does.
                              </p>
                              <ul className="user-social-links">
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i className="fab fa-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i className="fab fa-linkedin" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <i className="fab fa-youtube" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Conurse  instructor end */}
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
                  <div className="course-latest">
                    <h4>Popular Courses</h4>
                    <ul className="recent-posts course-popular">
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img
                              src="assets/images/course/course-sm1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {" "}
                            <a href="#">Wordpress Theme Development</a>
                          </h6>
                          <h5>$120</h5>
                        </div>
                      </li>
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img
                              src="assets/images/course/course-sm2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {" "}
                            <a href="#">mastering Photoshop for beginners</a>
                          </h6>
                          <h5>$100</h5>
                        </div>
                      </li>
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img
                              src="assets/images/course/course-sm3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {" "}
                            <a href="#">Photography mastering adobe tool</a>
                          </h6>
                          <h5>$100</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Course Sidebar end */}
              </div>
            </div>
          </div>
        </section>
        {/* Related Course section start */}
        <section className="section-padding related-course bg-grey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h4>Related Courses You may Like</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="course-block">
                  <div className="course-img">
                    <img
                      src="assets/images/course/course-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
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
                      <a href="#">React – The Complete Guide (React Router)</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis, alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="course-block">
                  <div className="course-img">
                    <img
                      src="assets/images/course/course-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="course-price2">$70</div>
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
                    </div>
                    <h4>
                      <a href="#">Photography Crash Course for Photographer</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis, alias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="course-block">
                  <div className="course-img">
                    <img
                      src="assets/images/course/course-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="course-price2">$160</div>
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
                    </div>
                    <h4>
                      <a href="#">Information About UI/UX Design Degree</a>
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
    </div>
  );
};

export default CourseDetails;
