import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import scroll from "../scroll";

import { getCourses } from "../../JS/actions/course";
import CourseCard from "./CourseCard";
const CourseByCategory = ({ location }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfpages = useSelector((state) => state.courseReducer.totalPages);

  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const category = location.state.category;
  const courses = useSelector((state) => state.courseReducer.courses);
  const loadCourses = useSelector((state) => state.courseReducer.loadCourses);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfpages - 1, pageNumber + 1));
  };

  useEffect(() => {
    dispatch(getCourses(category, name, pageNumber));
    console.log(courses);
    console.log(pageNumber);
  }, [name, pageNumber, category]);
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-8">
              <div className="title-block">
                <h1>{category}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding course">
        <div className="course-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="topbar-search">
                  <input
                    type="text"
                    placeholder="Search our courses"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>
                    <i className="fa fa-search" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {loadCourses && <h1>please wait loading</h1>}
          {courses.length !== 0 &&
            courses.map((el) => <CourseCard course={el} key={el._id} />)}
          {courses.length != 0 && (
            <button
              onClick={() => {
                gotoPrevious();
              }}
            >
              Previous
            </button>
          )}
          {courses.length !== 0 &&
            pages.map((pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => {
                  setPageNumber(pageIndex);
                }}
              >
                {pageIndex + 1}
              </button>
            ))}
          {courses.length !== 0 && (
            <button
              onClick={() => {
                gotoNext();
              }}
            >
              Next
            </button>
          )}
          {courses.length === 0 && <h1>There is no course in this category</h1>}
        </div>
      </section>
    </div>
  );
};

export default CourseByCategory;
