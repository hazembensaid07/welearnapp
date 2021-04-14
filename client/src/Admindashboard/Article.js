import React from "react";

import { Button, Card } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../JS/actions/blog";

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
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Article;
