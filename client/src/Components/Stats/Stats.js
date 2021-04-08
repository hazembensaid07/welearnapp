import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="counter-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 bg-black counter-inner">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center">
                    <i className="flaticon-video-camera" />
                    <div className="count">
                      <span className="counter">4</span>
                    </div>
                    <h6>Instructors</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center">
                    <i className="flaticon-layers" />
                    <div className="count">
                      <span className="counter">3</span>
                    </div>
                    <h6>Total Courses</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center">
                    <i className="flaticon-flag" />
                    <div className="count">
                      <span className="counter">6</span>
                    </div>
                    <h6>Registered Enrolls</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-item text-center border-0">
                    <i className="flaticon-help" />
                    <div className="count">
                      <span className="counter">100</span>%
                    </div>
                    <h6>Satisfaction rate</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
