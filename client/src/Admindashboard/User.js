import React from "react";

import { Button, Card } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../JS/actions/user";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>{user.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              inverted
              color="red"
              onClick={() => dispatch(deleteUser(user._id))}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default User;
