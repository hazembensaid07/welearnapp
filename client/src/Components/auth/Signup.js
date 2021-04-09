import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../core/Layout";
import axios from "axios";
import { isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: "http://localhost:8000/api/signup",
      data: { name, email, password },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };
  return (
    <div>
      <ToastContainer />
      {/*isAuth() ? <Redirect to="/" /> : null */}
      <section className="space-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="font-weight-bold mb-4">Register</h2>

              <form
                method="post"
                className="woocommerce-form woocommerce-form-register register"
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label>
                    User Name&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    name="user-name"
                    onChange={handleChange("name")}
                    value={name}
                    placeholder="Username"
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label>
                    Email address&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    name="email"
                    onChange={handleChange("email")}
                    value={email}
                    placeholder="Email"
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label>
                    Password&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    name="password"
                    onChange={handleChange("password")}
                    value={password}
                    placeholder="Password"
                  />
                </p>
                <p className="woocommerce-FormRow form-row">
                  <input
                    type="hidden"
                    id="woocommerce-register-nonce"
                    name="woocommerce-register-nonce"
                    defaultValue="b1c661ab82"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    defaultValue="/my-account/"
                  />
                  <button
                    type="submit"
                    className="woocommerce-Button button"
                    name="register"
                    value="Register"
                    onClick={clickSubmit}
                  >
                    Register
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
