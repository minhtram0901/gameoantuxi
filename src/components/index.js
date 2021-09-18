import React, { Component } from "react";
import "../assets/css/index.css";
import Computer from "./computer";
import Player from "./player";
import Result from "./result";
import { connect } from "react-redux";

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
              <Result />
              <button
                className="btn-play mt-5"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                PLAY GAME
              </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 10;
      let computerPlay = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count--;
        if (count === 0) {
          clearInterval(computerPlay);
          dispatch({
            type: "ENDGAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuXi);
