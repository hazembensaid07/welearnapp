import React from "react";
import { Link } from "react-router-dom";
import handleScroll from "../scroll.js";
import { isAuth } from "../auth/helpers";
const NotFound = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <div className="error-page text-center error-404 not-found">
                <div className="error-header">
                  <h2>
                    <strong>404</strong>
                  </h2>
                </div>
                <div className="error-message">
                  <h3>Oops... Page Not Found!</h3>
                </div>
                <div className="error-content">
                  Try using the button below to go to main page of the site
                  <br />
                  {isAuth() ? (
                    <Link
                      onClick={handleScroll}
                      to="/home"
                      className="btn btn-main"
                    >
                      Back to Home Page
                    </Link>
                  ) : (
                    <Link
                      onClick={handleScroll}
                      to="/"
                      className="btn btn-main"
                    >
                      Back to Home Page
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* #main */}
      </div>
    </div>
  );
};

export default NotFound;
