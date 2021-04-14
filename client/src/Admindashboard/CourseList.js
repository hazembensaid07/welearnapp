import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../JS/actions/course";
import CourseCardClone from "./courseCardClone";

const CourseList = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courseReducer.courses);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);
  useEffect(() => {
    dispatch(getCourses("", "", ""));
  }, []);
  return (
    <div>
      <button>Add Courses</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {loadCourses ? (
          <h2>loading</h2>
        ) : courses.length == 0 ? (
          <h2>there is no data show</h2>
        ) : (
          courses.map((el) => <CourseCardClone key={el._id} course={el} />)
        )}
      </div>
    </div>
  );
};

export default CourseList;
