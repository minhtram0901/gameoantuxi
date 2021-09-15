import React, { Component } from "react";
import "../assets/css/index.css";
import Computer from "./computer";
import Player from "./player";
import Result from "./result";

class OanTuXi extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4 text-center">
              <Result/>
              <button className="btn-play mt-5">PLAY GAME</button>
            </div>
            <div className="col-4">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OanTuXi;
