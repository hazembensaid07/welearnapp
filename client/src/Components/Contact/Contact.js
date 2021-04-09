import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postContacts } from "../../JS/actions/contact";
import "./Contact.css";
const Contact = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  const handleContact = (e) => {
    e.preventDefault();
    if (
      message.name === "" ||
      message.email === "" ||
      message.subject === "" ||
      message.msg === ""
    ) {
      alert("you should fill all the forms");
      setMessage({ name: "", email: "", subject: "", msg: "" });
    } else {
      dispatch(postContacts(message));
      setMessage({ name: "", email: "", subject: "", msg: "" });
    }
  };
  return (
    <section className="hhh">
      <div className="container ">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 col-xl-7">
            <div className="section-heading center-heading">
              <span className="subheading">contact</span>
              <a
                target="_blank"
                href="https://www.google.com/maps/dir/?api=1&destination=36.90393979607779, 10.184254969056784"
              >
                <h3>
                  For more information about our courses, Visit Us in our Local
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="contact-item">
                  <p>Email Us</p>
                  <h4>weLearnsupport@gmail.com</h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="contact-item">
                  <p>Make a Call</p>
                  <h4>+216 53307672</h4>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="contact-item">
                  <p>Corporate Office</p>
                  <h4>Lac 1</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form className="contact__form form-row " id="contactForm">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={message.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={message.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={message.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="msg"
                      cols={30}
                      rows={6}
                      className="form-control"
                      placeholder="Your Message"
                      value={message.msg}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mt-4 ">
                  <button
                    className="btn btn-main"
                    type="submit"
                    onClick={(e) => {
                      handleContact(e);
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
