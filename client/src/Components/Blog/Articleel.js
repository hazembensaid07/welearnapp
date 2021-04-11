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
              Written by <a href="#">Admin</a>
            </span>
            <span className="post-date">
              <i className="fa fa-calendar-alt mr-2" />
              March 15, 2021
            </span>
          </div>
          <h2 className="post-title">
            <Link onClick={handleScroll} to="/blogEl">
              How to become a best sale marketer in a month!
            </Link>
          </h2>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              aliquam, aliquid. Eos eum, illo autem unde consequatur, obcaecati
              quam voluptatem repellat consequuntur repellendus delectus
              voluptas architecto, quos amet hic aliquid!
            </p>
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
