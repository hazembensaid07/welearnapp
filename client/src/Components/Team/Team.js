import React from "react";
import img1 from "../../assets/images/team/team-4.jpg";
import img2 from "../../assets/images/team/team-1.jpg";
import img3 from "../../assets/images/team/team-2.jpg";
import img4 from "../../assets/images/team/team-3.jpg";

const Team = () => {
  return (
    <div>
      <section className="team pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-7">
              <div className="section-heading center-heading">
                <span className="subheading">Best Expert Team</span>
                <h3>Our Professional Team</h3>
                <p>
                  The ultimate planning solution for busy women who want to
                  reach their personal goals
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="team-item mb-4 mb-lg-0">
                <img src={img1} alt="" className="img-fluid" />
                <div className="team-info">
                  <h5>Hazem Bensaid</h5>
                  <p>CEO, Developer</p>
                  <ul className="team-socials list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="team-item mb-4 mb-lg-0">
                <img src={img2} alt="" className="img-fluid" />
                <div className="team-info">
                  <h5>Leith Mahfoudhi</h5>
                  <p>CEO, Developer</p>
                  <ul className="team-socials list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
