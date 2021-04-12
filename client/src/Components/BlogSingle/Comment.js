import React from "react";

const Comment = ({ comment }) => {
  console.log(comment.name);
  return (
    <div>
      <div className="media">
        <div className="media-body">
          <h5 className="mt-0">{comment.name}</h5>
          {comment.msg}
        </div>
      </div>
    </div>
  );
};

export default Comment;
