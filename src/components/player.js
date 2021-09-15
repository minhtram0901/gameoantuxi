import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="bubble">
          <img className="thinking"
            style={{ width: 100, height: 100 }}
            src="/img/bua2.png"
            alt="bua"
          />
        </div>
        <div className="pointerA"></div>
        <div className="bubble blurred"></div>
        <div className="pointerA blurred"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="/img/playerA.png"
          alt="playerA"
        />
        <div className="item-container">
          <button className="item">
            <img
              style={{ width: 50, height: 50 }}
              src="/img/bua2.png"
              alt="bua"
            />
          </button>
          <button className="item">
            <img
              style={{ width: 50, height: 50 }}
              src="/img/keo2.png"
              alt="keo"
            />
          </button>
          <button className="item">
            <img
              style={{ width: 50, height: 50 }}
              src="/img/bao2.png"
              alt="bao"
            />
          </button>
        </div>
      </div>
    );
  }
}
