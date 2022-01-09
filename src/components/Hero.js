import React, { Component } from "react";
export default class Hero extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }
  position = this.props.info.position;
  render() {
    if (this.position) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h2 className="hero-text-bold">{this.props.info.title}</h2>
              <br />
              <p className="hero-text-slim">{this.props.info.text}</p>
              <br />
              <button className="btn btn-blue">
                {this.props.info.buttonText}
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={this.props.info.src}
                alt="hero"
                width="310"
                height="340"
              />
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={this.props.info.src}
                alt="hero"
                width="310"
                height="340"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="hero-text-bold">{this.props.info.title}</h2>
              <br />
              <p className="hero-text-slim">{this.props.info.text}</p>
              <br />
              <button className="btn btn-blue">
                {this.props.info.buttonText}
              </button>
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    }
  }
}
