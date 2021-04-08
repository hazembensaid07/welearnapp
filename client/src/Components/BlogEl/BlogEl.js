import React from "react";

const BlogEl = () => {
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
              May 9, 2020
            </span>
          </div>
          <h2 className="post-title">
            <a href="blog-single.html">
              How to become a best sale marketer in a month!
            </a>
          </h2>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              aliquam, aliquid. Eos eum, illo autem unde consequatur, obcaecati
              quam voluptatem repellat consequuntur repellendus delectus
              voluptas architecto, quos amet hic aliquid!
            </p>
            <a href="blog-single.html" className="read-more">
              More Details <i className="fa fa-angle-right ml-2" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogEl;
