import React from "react";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";
const Blog = () => {
  return (
    <div>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Blog</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, aliquam, aliquid. Eos eum, illo autem unde
                        consequatur, obcaecati quam voluptatem repellat
                        consequuntur repellendus delectus voluptas architecto,
                        quos amet hic aliquid!
                      </p>

                      <Link
                        onClick={handleScroll}
                        to="/blogEl"
                        className="read-more"
                      >
                        {" "}
                        More Details <i className="fa fa-angle-right ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="blog-post-item">
                  <div className="post-thumb">
                    <img
                      src="assets/images/blog/news-2.jpg"
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
                        How to become a Game Developer
                      </Link>
                    </h2>
                    <div className="post-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, aliquam, aliquid. Eos eum, illo autem unde
                        consequatur, obcaecati quam voluptatem repellat
                        consequuntur repellendus delectus voluptas architecto,
                        quos amet hic aliquid!
                      </p>
                      <Link
                        onClick={handleScroll}
                        to="/blogEl"
                        className="read-more"
                      >
                        More Details <i className="fa fa-angle-right ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="blog-post-item">
                  <div className="post-thumb">
                    <img
                      src="assets/images/blog/news-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="post-item mt-4">
                    <div className="post-meta">
                      <span className="post-author">Written by Admin</span>
                      <span className="post-date">
                        <i className="fa fa-calendar-alt mr-2" />
                        March 15, 2021
                      </span>
                    </div>
                    <h2 className="post-title">
                      <Link
                        onClick={handleScroll}
                        to="/blogEl"
                        className="read-more"
                      >
                        How to become a Web Developer
                      </Link>
                    </h2>
                    <div className="post-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, aliquam, aliquid. Eos eum, illo autem unde
                        consequatur, obcaecati quam voluptatem repellat
                        consequuntur repellendus delectus voluptas architecto,
                        quos amet hic aliquid!
                      </p>
                      <Link
                        onClick={handleScroll}
                        to="/blogEl"
                        className="read-more"
                      >
                        More Details <i className="fa fa-angle-right ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
                <nav className="post-navigation">
                  <ul>
                    <li className="page-num active" aria-current="page">
                      <span className="page-url">
                        1<span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-num">
                      <a className="page-url" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-num">
                      <a className="page-url" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
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
                            <Link onClick={handleScroll} to="/blogEl">
                              How to become a Mobile Developer
                            </Link>
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
                          Game Development
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

export default Blog;
