import React from "react";

const CourseSection = ({ course }) => {
  return (
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
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="post-single">
                <div className="single-post-content">
                  <div className="post-meta">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-7">
                        <ul>
                          <li>presented by {course.instructor}</li>
                        </ul>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5"></div>
                    </div>
                  </div>
                  <p>{course.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
