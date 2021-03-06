import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../Components/auth/helpers";
import logo from "../assets/images/dark-logo.png";
const Layout = ({ children, match, history }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  return (
    <Fragment>
      <header>
        <div
          className="site-navigation main_menu menu-style-2"
          id="mainmenu-area"
        >
          <nav className="navbar navbar-expand-lg " id="nav_bar">
            <div className="container">
              {isAuth() ? (
                <Link to="/home" className="navbar-brand">
                  <img src={logo} alt="Eduhash" className="img-fluid" />
                </Link>
              ) : (
                <Link to="/" className="navbar-brand">
                  <img src={logo} alt="Eduhash" className="img-fluid" />
                </Link>
              )}
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars" />
              </button>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item dropdown">
                    {isAuth() ? (
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/home"
                        id="navbar3"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    ) : (
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbar3"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    )}
                  </li>
                  <li className="nav-item ">
                    <Link to="/aboutUs" className="nav-link js-scroll-trigger">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbar3">
                      <Link
                        to={{
                          pathname: `/courses`,
                          state: { category: "web development" },
                        }}
                        className="dropdown-item "
                      >
                        Web Development
                      </Link>
                      <Link
                        t
                        to={{
                          pathname: `/courses`,
                          state: { category: "mobile development" },
                        }}
                        className="dropdown-item "
                      >
                        Mobile Development
                      </Link>
                      <Link
                        to={{
                          pathname: `/courses`,
                          state: { category: "game development" },
                        }}
                        className="dropdown-item "
                      >
                        Game Development
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/blog"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                {!isAuth() && (
                  <div className="header-login">
                    <Link
                      to="/signin"
                      className="btn btn-solid-border btn-sm log "
                    >
                      Log In
                    </Link>
                  </div>
                )}{" "}
                {!isAuth() && (
                  <Link to="/signup" className="btn btn-main btn-sm">
                    sign up
                  </Link>
                )}
                {isAuth() && (
                  <div className="header-login">
                    <Link className="btn btn-main btn-sm" to="/mycourses">
                      My Courses
                    </Link>
                  </div>
                )}
                {isAuth() && isAuth().role === "subscriber" && (
                  <div className="header-login">
                    <Link
                      className="btn btn-main btn-sm"
                      style={isActive("/private")}
                      to="/private"
                    >
                      Your profile
                    </Link>
                  </div>
                )}
                {isAuth() && isAuth().role === "admin" && (
                  <div className="header-login">
                    <Link
                      className="btn btn-main btn-sm"
                      style={isActive("/private")}
                      to="/admin"
                    >
                      Your Profile
                    </Link>
                  </div>
                )}
                {isAuth() && isAuth().role === "admin" && (
                  <div className="header-login">
                    <Link
                      className="btn btn-main btn-sm"
                      style={isActive("/private")}
                      to="/admindash"
                    >
                      Admin Dashboard
                    </Link>
                  </div>
                )}
                {isAuth() && (
                  <button
                    className="btn btn-solid-border btn-sm log "
                    onClick={() => {
                      signout(() => {
                        history.push("/");
                      });
                    }}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
      {children}
    </Fragment>
  );
};

export default withRouter(Layout);
