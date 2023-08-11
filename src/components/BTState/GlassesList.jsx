import React, { Component } from "react";
import Glasses from "./Glasses";

export default class GlassesList extends Component {
  renderList = () => {
    return this.props.data.map((element, index) => {
      return (
        <div key={index}>
          <Glasses getDetail={this.props.getDetail} element={element} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}
