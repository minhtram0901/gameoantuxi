import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="computer">
        <div className="bubble">
          <img
            className="thinking"
            style={{ width: 100, height: 100 }}
            src="/img/bua2.png"
            alt="bua"
          />
        </div>
        <div className="pointerB"></div>
        <div className="bubble blurred"></div>
        <div className="pointerB blurred"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="/img/playerB.png"
          alt="playerB"
        />
      </div>
    );
  }
}
