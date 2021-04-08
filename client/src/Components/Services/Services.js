import React from "react";
import logo1 from "../../assets/images/icon/customer-service.png";

const Services = () => {
  return (
    <div>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Professional Services</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item">Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="heading">
                  <h2>Grow your Business with us</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">01</span>
                  <i className="flaticon-network" />
                  <h4>Analytics and Research</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">02</span>
                  <i className="flaticon-statistics" />
                  <h4>Online Marketing</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">03</span>
                  <i className="flaticon-laptop" />
                  <h4>Design &amp; Development</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">04</span>
                  <i className="flaticon-bullhorn" />
                  <h4>SEOptimization</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">05</span>
                  <i className="flaticon-value" />
                  <h4>Social Media Marketing</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <span className="number">06</span>
                  <i className="flaticon-creativity" />
                  <h4>Content Marketing</h4>
                  <p>
                    Behind the word mountains, far from the countries Vokalia
                    and Conson antia, there seed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Sidebar start */}
        <section className="cta-3 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="cta-heading">
                  <h2>Want to work with us?</h2>
                  <div className="call">
                    <img src={logo1} alt="" className="img-fluid" />
                    +76 387 34896
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Services;
