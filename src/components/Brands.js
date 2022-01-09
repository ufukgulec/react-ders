import React, { Component } from "react";
import bir from "images/brands/Group.svg";
import iki from "images/brands/Group1.svg";
import uc from "images/brands/Group2.svg";
import dort from "images/brands/Group3.svg";
export default class Brands extends Component {
  render() {
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col-3">
            <img src={bir} alt="" />
          </div>
          <div className="col-3">
            <img src={iki} alt="" />
          </div>
          <div className="col-3">
            <img src={uc} alt="" />
          </div>
          <div className="col-3">
            <img src={dort} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
