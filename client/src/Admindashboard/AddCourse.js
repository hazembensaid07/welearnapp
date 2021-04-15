import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addCourse } from "../JS/actions/course";
import { Link } from "react-router-dom";
const AddCourse = () => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState({
    name: "",
    overview: "",
    imgSrc: "",
    duration: "",
    enrolled: "",
    lectures: "",
    instructor: "",
    update: "",
    lessons: "",
    category: "",
    price: "",
  });
  const handleCourse = () => {
    dispatch(addCourse(course));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {" "}
      <Form>
        <Form.Field>
          <label> name</label>
          <input
            placeholder="name"
            value={course.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>imgSrc</label>
          <input
            placeholder="imgSrc"
            value={course.imgSrc}
            name="imgSrc"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>overview</label>
          <input
            placeholder="overview"
            name="overview"
            value={course.overview}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>duration</label>
          <input
            placeholder="duration"
            name="duration"
            value={course.duration}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>enrolled</label>
          <input
            placeholder="enrolled"
            name="enrolled"
            value={course.enrolled}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>lectures</label>
          <input
            placeholder="lectures"
            name="lectures"
            value={course.lectures}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>instructor</label>
          <input
            placeholder="instructor"
            name="instructor"
            value={course.instructor}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>update</label>
          <input
            placeholder="update"
            name="update"
            value={course.update}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>lessons</label>
          <input
            placeholder="lessons"
            name="lessons"
            value={course.lessons}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>category</label>
          <input
            placeholder="category"
            name="category"
            value={course.category}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>price</label>
          <input
            placeholder="price"
            name="price"
            value={course.price}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>price</label>
          <input
            placeholder="vidSrc"
            name="vidSrc"
            value={course.vidSrc}
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/CourseList">
          <Button type="submit" onClick={handleCourse}>
            add
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddCourse;
