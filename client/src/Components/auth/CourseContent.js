import { React, useState } from "react";
import CourseSection from "./CourseSection";

const CourseContent = ({ location }) => {
  const [validate, setValidate] = useState(false);
  const course = location.state.course;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <iframe
        style={{
          marginTop: "12%",
          marginBottom: "6%",
        }}
        className="youtube"
        width={620}
        height={500}
        src={"https://www.youtube.com/embed/w7ejDZ8SWv8"}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <button onClick={() => setValidate(true)} style={{ marginBottom: "5%" }}>
        {validate ? "validated" : "validate"}
      </button>
      {validate ? (
        <CourseSection className="sectionc" course={course} />
      ) : (
        <h2>
          Complete the video in order to move to the next section of{" "}
          {course.name}{" "}
        </h2>
      )}
    </div>
  );
};

export default CourseContent;
