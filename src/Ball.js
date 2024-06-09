import React, { Component } from "react";

class Ball extends Component {
  render() {
    return <h1 className="Ball">{this.props.num}</h1>;
  }
}
export default Ball;
