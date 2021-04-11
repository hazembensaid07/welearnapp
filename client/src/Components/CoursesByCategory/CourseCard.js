import React from "react";
import { Link } from "react-router-dom";

import handleScroll from "../scroll.js";
const CourseCard = ({ course }) => {
  return (
    <div>
      {console.log(course)}
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div className="course-block">
            <div className="course-img">
              <img src={course.imgSrc} alt="" className="img-fluid" />
              <div className="course-price2">{course.price}</div>
            </div>
            <div className="course-content">
              <div className="course-meta">
                <span className="course-student">
                  <i className="fa fa-user-alt" />
                  {course.enrolled}Students
                </span>
                <span className="course-duration">
                  <i className="far fa-file-alt" />
                  {course.lessons} Lessons
                </span>
                <span className="course-label">new</span>
              </div>
              <h4>
                <Link
                  onClick={handleScroll}
                  to={{
                    pathname: `/courseDetails`,
                    state: { _id: course._id },
                  }}
                >
                  {course.name}
                </Link>
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
                alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
