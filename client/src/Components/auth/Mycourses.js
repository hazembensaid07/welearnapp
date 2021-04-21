import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../JS/actions/courseEnroll";

import MycoursesCard from "./MycoursesCard";

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
    console.log(courseEnrolled);
  }, []);
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>My Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {loadEnrolled ? (
          <h1>please wait loading</h1>
        ) : courseEnrolled === 0 ? (
          <h1>You bought no courses</h1>
        ) : (
          courseEnrolled.map((enroll) => (
            <MycoursesCard course={enroll.course} key={enroll.course._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Mycourses;
