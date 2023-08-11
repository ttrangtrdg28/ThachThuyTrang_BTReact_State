import React, { Component } from "react";
import data from "../../data/dataGlasses.json";
import Detail from "./Detail";
import GlassesList from "./GlassesList";

export default class BTState extends Component {
  state = {
    glassesDetail: data[0],
  };

  getDetail = (data) => {
    this.setState({
      glassesDetail: data,
    });
  };

  render() {
    return (
      <div>
        <Detail detail={this.state.glassesDetail} />
        <GlassesList data={data} getDetail={this.getDetail} />
      </div>
    );
  }
}
