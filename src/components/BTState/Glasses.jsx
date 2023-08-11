import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    return (
      <div onClick={() => this.props.getDetail(this.props.element)}>
        <img
          className="mb-2 mx-4 item"
          src={this.props.element.url}
          alt="..."
          width={150}
        />
        <p align="center" className="">
          {this.props.element.name}
        </p>
      </div>
    );
  }
}
