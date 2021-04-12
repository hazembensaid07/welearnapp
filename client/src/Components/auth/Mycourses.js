import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, getCourses } from "../../JS/actions/courseEnroll";
import handleScroll from "../scroll.js";

const Mycourses = () => {
  const dispatch = useDispatch();
  const courseEnrolled = useSelector(
    (state) => state.courseEnrollReducer.courseEnroll
  );
  const loadEnrolled = useSelector(
    (state) => state.courseEnrollReducer.loadCourseEnroll
  );

  useEffect(() => {
    dispatch(getCourses(localStorage.getItem("user")));
  }, []);
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>Your Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {loadCourseEnroll ? <h1>please wait loading</h1> : (
            courseEnrolled.map((course)=>)}

        {loadCourses ? (
          <h1>please wait loading</h1>
        ) : courses.length === 0 ? (
          <h1>There is no course in this category</h1>
        ) : (
          courses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Mycourses;
