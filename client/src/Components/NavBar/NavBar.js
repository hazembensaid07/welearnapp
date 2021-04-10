import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dark-logo.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <div
        className="site-navigation main_menu menu-style-2"
        id="mainmenu-area"
      >
        <nav className="navbar navbar-expand-lg " id="nav_bar">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Eduhash" className="img-fluid" />
            </Link>
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
              <div className="header-login">
                <Link to="/signin" className="btn btn-solid-border btn-sm log ">
                  Log In
                </Link>
              </div>
              <div className="header-login">
                <Link to="/signup" className="btn btn-main btn-sm">
                  sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
