import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../JS/actions/course";

import handleScroll from "../Components/scroll";
const CourseCardClone = ({ course, key }) => {
  const dispatch = useDispatch();

  return (
    <div>
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
                  {course.enrolled}
                </span>
                <span className="course-duration">
                  <i className="far fa-file-alt" />
                  {course.lessons}
                </span>
                <span className="course-label">new</span>
              </div>
              <h4>
                <Link
                  to={{
                    pathname: `/courseDetails`,
                    state: { id: course._id },
                  }}
                  onClick={handleScroll}
                >
                  {course.name}
                </Link>
              </h4>
              <button onClick={() => dispatch(deleteCourse(course._id))}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardClone;
