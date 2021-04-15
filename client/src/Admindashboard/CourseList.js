import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../JS/actions/course";
import CourseCardClone from "./courseCardClone";
import { Link } from "react-router-dom";

const CourseList = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courseReducer.courses);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);
  useEffect(() => {
    dispatch(getAllCourses());
    console.log(courses);
  }, []);
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
      }}
    >
      <Link to="/addcourse">
        <button>Add Courses</button>
      </Link>

      {loadCourses ? (
        <h2>loading</h2>
      ) : courses.length == 0 ? (
        <h2>there is no data show</h2>
      ) : (
        courses.map((el) => <CourseCardClone key={el._id} course={el} />)
      )}
    </div>
  );
};

export default CourseList;
