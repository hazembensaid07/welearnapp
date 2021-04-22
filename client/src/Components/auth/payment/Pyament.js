import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import handleScroll from "../../scroll.js";

const Pyament = () => {
  return (
    <div>
      <form>
        <div className="card-details">
          <h3 className="title">Credit Card Details</h3>
          <div className="row">
            <div className="form-group col-sm-7">
              <label htmlFor="card-holder">Card Holder</label>
              <input
                id="card-holder"
                type="text"
                className="form-control"
                placeholder="Card Holder"
                aria-label="Card Holder"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="form-group col-sm-5">
              <label htmlFor>Expiration Date</label>
              <div className="input-group expiration-date">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM"
                  aria-label="MM"
                  aria-describedby="basic-addon1"
                />
                <span className="date-separator">/</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="YY"
                  aria-label="YY"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="form-group col-sm-8">
              <label htmlFor="card-number">Card Number</label>
              <input
                id="card-number"
                type="text"
                className="form-control"
                placeholder="Card Number"
                aria-label="Card Holder"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="cvc">CVC</label>
              <input
                id="cvc"
                type="text"
                className="form-control"
                placeholder="CVC"
                aria-label="Card Holder"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="form-group col-sm-12">
              <Link
                onClick={handleScroll}
                className="read-more"
                to={{
                  pathname: `/myCourses`,
                }}
              >
                <button type="button" className="btn btn-primary btn-block">
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Pyament;
