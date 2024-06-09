import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = { num: Array.from({ length: this.props.maxBall }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState((cur) => ({
      num: this.state.num.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
