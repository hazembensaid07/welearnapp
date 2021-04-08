import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import { authenticate, isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import Google from "./Google";
import Facebook from "./Facebook";
import "react-toastify/dist/ReactToastify.min.css";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const informParent = (response) => {
    authenticate(response, () => {
      isAuth() && isAuth().role === "admin"
        ? history.push("/admin")
        : history.push("/private");
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: "http://localhost:8000/api/signin",
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        // save the response (user, token) localstorage/cookie
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
          });
          // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin")
            : history.push("/private");
        });
      })
      .catch((error) => {
        console.log("SIGNIN ERROR", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  return (
    <div>
      <ToastContainer />
      {/* { ? ( isAuth()  ) <Redirect to="/" /> } */}
      <h1 className="p-5 text-center">Signin</h1>
      <Google informParent={informParent} />
      <Facebook informParent={informParent} />
      <section className="space-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="woocommerce-notices-wrapper" />
              <h2 className="font-weight-bold mb-4">Login</h2>

              <form className="woocommerce-form woocommerce-form-login login">
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="username">
                    Username or email address&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    name="username"
                    id="username"
                    onChange={handleChange("email")}
                    value={email}
                    type="email"
                    placeholder="Username or Email"
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="password">
                    Password&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange("password")}
                    value={password}
                    type="password"
                    placeholder="password"
                  />
                </p>
                <p className="form-row">
                  <input
                    type="hidden"
                    id="woocommerce-login-nonce"
                    name="woocommerce-login-nonce"
                    defaultValue="a414dce984"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    defaultValue="/my-account/"
                  />

                  <button
                    type="submit"
                    className="woocommerce-button button woocommerce-form-login__submit"
                    name="login"
                    value="Log in"
                    onClick={clickSubmit}
                  >
                    Log in
                  </button>
                </p>
                <p className="woocommerce-LostPassword lost_password">
                  <Link to="/auth/password/forgot">Forgot Password</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
