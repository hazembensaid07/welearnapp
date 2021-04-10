import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import handleScroll from "../scroll.js";
import { useDispatch, useSelector } from "react-redux";
import { getComments, sendComment } from "../../JS/actions/comments";
import Comment from "./Comment.js";

const BlogSingle = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer.comments);
  const loadComments = useSelector(
    (state) => state.commentsReducer.loadComments
  );
  const sumComments = useSelector((state) => state.commentsReducer.sumComments);
  const [comment, setComment] = useState({
    msg: "",
    website: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    dispatch(getComments());
    console.log(comments);
    console.log(sumComments);
  }, []);

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
                  <h1>How to become a best sale marketer in a month!</h1>
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
                            <li>
                              Written by <a href="#">Admin</a>
                            </li>
                            <li>12 August, 2020</li>
                          </ul>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                          <div className="blog-comment">
                            <h3>
                              <i className="fa fa-comments" /> 32 Comments
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Create User analysis to go far</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem, omnis voluptatum iure expedita sequi obcaecati iste
                      dolores debitis numquam, reprehenderit eum consequuntur
                      cum, quam nesciunt esse tenetur architecto molestiae
                      adipisci.
                    </p>
                    <p>
                      Some SEO-related tools such as the Google Keyword Planner
                      and Google Analytics provide quantitative
                    </p>
                    <blockquote>
                      Good design good business.Deliver the project wirthin
                      time.its called professionalism. Build your site with
                      care.
                      <cite>- Site Admin</cite>
                    </blockquote>
                    <div className="row mt-5 mb-4">
                      <div className="col-lg-4">
                        <img
                          src="assets/images/blog/about-img.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-4">
                        <img
                          src="assets/images/blog/about-img.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-4">
                        <h4>Final Delivery</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia enim nihil accusamus error perspiciatis
                          nam quas
                        </p>
                      </div>
                    </div>
                    <h4>SEO is a Cost-Effective Advertising Strategy</h4>
                    <p>
                      Some SEO-related tools such as the Google Keyword Planner
                      and Google Analytics provide quantitative data to help you
                      understand your market, analyze the trends, and know your
                      competitors’ standings. It helps you identify popular and
                      valuable keywords so you can decide how to structure or
                      revise your content. It also gives you insights on your
                      market’s behavior such as location, times of activity,
                      frequency of searches, technologies used, product
                      preferences, etc. All these metrics are useful in helping
                      you get to know your audience.
                    </p>
                  </div>
                  <div className="article-share">
                    <ul className="social-icon">
                      <li>
                        <h6>Share This Post: </h6>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fab fa-twitter" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fab fa-instagram" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="author">
                    <div className="author-img">
                      <img
                        src="assets/images/blog/author.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="author-info">
                      <h4>Mikel John</h4>
                      <p>Web Developer</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia enim nihil accusamus error perspiciatis
                        nam quas distinctio nobis, quibusdam mollitia totam
                        ipsam obcaecati, iusto alias reprehenderit tempora
                        placeat voluptates eligendi.
                      </p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook" />
                          </a>
                        </li>

                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="comments">
                    <h3 className="commment-title">{sumComments} Comments</h3>
                    {loadComments ? (
                      <h2>loading</h2>
                    ) : comments.length == 0 ? (
                      <h2>there is no data show</h2>
                    ) : (
                      comments.map((el) => (
                        <Comment
                          key={el._id}
                          comment={el}
                          number={sumComments}
                        />
                      ))
                    )}
                  </div>
                  <div className="comments-form p-lg-5 mt-4 ">
                    <h3>Leave a comment </h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form action="#" className="comment_form">
                      <div className="row form-row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              name="msg"
                              value={comment.msg}
                              id="msgt"
                              cols={30}
                              rows={6}
                              placeholder="Comment"
                              className="form-control"
                              defaultValue={""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website"
                              name="website"
                              value={comment.website}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              name="name"
                              value={comment.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              name="email"
                              value={comment.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button
                              onClick={() => {
                                dispatch(sendComment(comment));
                                setComment({
                                  name: "",
                                  email: "",
                                  website: "",
                                  msg: "",
                                });
                              }}
                            >
                              <a href="#" className="btn btn-main">
                                Comment
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="blog-sidebar mt-5 mt-lg-0">
                  <div className="widget widget-search">
                    <form role="search" className="search-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget widget_latest_post">
                    <h4 className="widget-title">Latest Posts</h4>
                    <ul className="recent-posts">
                      <li>
                        <div className="widget-post-body">
                          <h6>
                            {" "}
                            <a href="#">How to become a Mobile Developer </a>
                          </h6>
                          <span>10 april 2020</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Web Development
                        </Link>
                        (1)
                      </li>
                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Mobile Development
                        </Link>
                        (1)
                      </li>

                      <li className="cat-item">
                        <Link onClick={handleScroll} to="/courses">
                          <i className="fa fa-angle-right" />
                          Game Devolpment
                        </Link>
                        (1)
                      </li>
                    </ul>
                  </div>
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
