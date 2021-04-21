import { React, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getComments, sendComment } from "../../JS/actions/comments";

import Comment from "./Comment.js";
import { isAuth } from "../auth/helpers";
const BlogSingle = ({ location }) => {
  const [article, setArticle] = useState(location.state.article);
  const dispatch = useDispatch();
  const loadComments = useSelector(
    (state) => state.commentsReducer.loadComments
  );
  const comments = useSelector((state) => state.commentsReducer.comments);

  useEffect(() => {
    dispatch(getComments(comment.articleID));
    console.log(comments);
  }, []);

  const [comment, setComment] = useState({
    msg: "",

    name: "",

    articleID: article._id,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>{article.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="post-single">
                  <div className="post-thumb">
                    <img
                      src="assets/images/blog/news-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="single-post-content">
                    <div className="post-meta">
                      <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-7">
                          <ul>
                            <li>Written by {article.writer}</li>
                            <li>{article.date}</li>
                          </ul>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5"></div>
                      </div>
                    </div>
                    <h4>{article.description}</h4>
                    <p>{article.information}</p>

                    <blockquote>
                      {article.quote}
                      <cite>- {article.writer}</cite>
                    </blockquote>
                  </div>
                  <h3 className="commment-title">Comments</h3>
                  {loadComments ? (
                    <h2>loading</h2>
                  ) : comments.length == 0 ? (
                    <h2>there is no data show</h2>
                  ) : (
                    comments.map((el) => <Comment key={el._id} comment={el} />)
                  )}
                  {isAuth() && (
                    <div className="comments-form p-lg-5 mt-4 ">
                      <h3>Leave a comment </h3>

                      <form className="comment_form">
                        <div className="row form-row">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                name="msg"
                                value={comment.msg}
                                id="msgt"
                                cols={20}
                                rows={4}
                                placeholder="Comment"
                                className="form-control"
                                defaultValue={""}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(
                                    sendComment({
                                      msg: comment.msg,
                                      name: isAuth().name,
                                      articleID: comment.articleID,
                                    })
                                  );

                                  setComment({
                                    name: "",

                                    msg: "",
                                  });
                                }}
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
