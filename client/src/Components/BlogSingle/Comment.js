import React from "react";

const Comment = ({ comment }) => {
  console.log(comment.name);
  return (
    <div>
      <div className="media">
        <div className="media-body">
          <h5 className="mt-0">
            {comment.name} <span>17 Feb 2020</span>{" "}
            <a className="reply-link" href="#">
              <i className="fas fa-reply-all" />
              Reply
            </a>
          </h5>
          {comment.msg}
        </div>
      </div>
    </div>
  );
};

export default Comment;
