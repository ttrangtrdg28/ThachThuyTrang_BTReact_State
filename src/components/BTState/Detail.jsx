import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div className="container">
        <div className="model d-flex justify-content-between">
          <div className="viewDetail">
            <img src="./glassesImage/model.jpg" alt="..." width={200} />
            <div className="tryGlass">
              <img src={this.props.detail.url} alt="..." width={130} />
            </div>
            <div className="description">
              <h6>{this.props.detail.name}</h6>
              <p>{this.props.detail.desc}</p>
            </div>
          </div>
          <img src="./glassesImage/model.jpg" alt="..." width={200} />
        </div>
      </div>
    );
  }
}
