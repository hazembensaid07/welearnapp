import React from "react";

import CourseDetails from "../Components/CourseDetails/CourseDetails";

const CourseView = ({ location }) => {
  const id = location.state.id;
  return (
    <div>
      <CourseDetails id={id} />
    </div>
  );
};

export default CourseView;
