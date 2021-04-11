import React from "react";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";

const Articleel = ({ article }) => {
  return (
    <div>
      <article className="blog-post-item">
        <div className="post-thumb">
          <img
            src="assets/images/blog/news-1.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="post-item mt-4">
          <div className="post-meta">
            <span className="post-author">
              Written by <a href="#">{article.writer}</a>
            </span>
            <span className="post-date">
              <i className="fa fa-calendar-alt mr-2" />
              {article.date}
            </span>
          </div>
          <h2 className="post-title">
            <Link
              onClick={handleScroll}
              className="read-more"
              to={{
                pathname: `/blogEl`,
                state: { article: article },
              }}
            >
              {article.title}
            </Link>
          </h2>
          <div className="post-content">
            <p>{article.description}</p>

            <Link
              onClick={handleScroll}
              className="read-more"
              to={{
                pathname: `/blogEl`,
                state: { article: article },
              }}
            >
              More Details <i className="fa fa-angle-right ml-2" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Articleel;
