import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { addArticle, editArticle } from "../JS/actions/blog";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AddArticle = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const articles = useSelector((state) => state.blogReducer.article);

  const [article, setArticle] = useState({
    writer: "",
    date: "",
    title: "",
    description: "",
    quote: "",
    information: "",
    imgSrc: "",
  });
  useEffect(() => {
    edit
      ? setArticle(articles)
      : setArticle({
          writer: "",
          date: "",
          title: "",
          description: "",
          quote: "",
          information: "",
          imgSrc: "",
        });
  }, [edit, articles]);
  const handleArticle = () => {
    if (!edit) {
      dispatch(addArticle(article));
    }
    dispatch(editArticle(articles._id, article));
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
          <label>imgSrc</label>
          <input
            placeholder="writer"
            value={article.imgSrc}
            name="imgSrc"
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
            {edit ? "save changes" : "Add"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddArticle;
