import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addArticle } from "../JS/actions/blog";
import { Link } from "react-router-dom";
const AddArticle = () => {
  const dispatch = useDispatch();

  const [article, setArticle] = useState({
    writer: "",
    date: "",
    title: "",
    description: "",
    quote: "",
    information: "",
    imgSrc: "",
  });
  const handleArticle = () => {
    dispatch(addArticle(article));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {" "}
      <Form>
        <Form.Field>
          <label> writer</label>
          <input
            placeholder="writer"
            value={article.writer}
            name="writer"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>date</label>
          <input
            placeholder="date"
            name="date"
            value={article.date}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>title</label>
          <input
            placeholder="title"
            name="title"
            value={article.title}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>description</label>
          <input
            placeholder="description"
            name="description"
            value={article.description}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>quote</label>
          <input
            placeholder="quote"
            name="quote"
            value={article.quote}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>information</label>
          <input
            placeholder="information"
            name="information"
            value={article.information}
            onChange={handleChange}
          />
        </Form.Field>
        <Link to="/bloglist">
          <Button type="submit" onClick={handleArticle}>
            add
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddArticle;
