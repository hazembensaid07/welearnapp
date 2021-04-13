import { React, useState } from "react";
import CourseSection from "./CourseSection";

const CourseContent = () => {
  const [validate, setValidate] = useState(false);

  return (
    <div>
      <iframe
        width={420}
        height={345}
        src={
          <iframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/w7ejDZ8SWv8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button onClick={() => setValidate(true)}>validate</button>
      {validate ? (
        <CourseSection />
      ) : (
        <h2>Complete the video in order to move to the next section</h2>
      )}
    </div>
  );
};

export default CourseContent;
