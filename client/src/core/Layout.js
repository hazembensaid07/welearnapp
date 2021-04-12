import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../Components/auth/helpers";

const Layout = () => {
  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      {!isAuth() && (
        <Fragment>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
        </Fragment>
      )}

      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            {isAuth().name}
          </Link>
        </li>
      )}

      {isAuth() && isAuth().role === "subscriber" && (
        <li className="nav-item">
          <Link className="nav-link" to="/private">
            {isAuth().name}
          </Link>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#fff" }}
            onClick={() => {
              signout(() => {
                console.log("out");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  );

  return <Fragment>{nav()}</Fragment>;
};

export default Layout;
