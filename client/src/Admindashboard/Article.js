import React from "react";
import { Link } from "react-router-dom";

import { Button, Card } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteArticle, getArticleByID } from "../JS/actions/blog";
import { toggleTrue } from "../JS/actions/edit";
const Article = ({ article }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {console.log(article._id)}
      <Card>
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Meta>{article.date}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              color="red"
              onClick={() => dispatch(deleteArticle(article._id))}
            >
              Delete
            </Button>
            <Link to={`/addArticle`}>
              <Button
                color="red"
                onClick={() => {
                  dispatch(toggleTrue());
                  dispatch(getArticleByID(article._id));
                }}
              >
                edit{" "}
              </Button>
            </Link>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Article;
