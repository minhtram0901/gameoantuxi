import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `
      @keyframes randomItem${Date.now()}{
        0% {left: 15px}
        50% {left: 95px}
      }
    `;
    return (
      <div className="computer">
        <style>{keyframe}</style>
        <div className="bubble">
          <img
            className="thinking"
            style={{
              width: 100,
              height: 100,
              animation: `randomItem${Date.now()} 0.3s`,
            }}
            src={this.props.computerPlay.hinhAnh}
            alt={this.props.computerPlay.hinhAnh}
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

const mapStateToProps = (state) => {
  return {
    computerPlay: state.gameReducer.computerPlay,
  };
};

export default connect(mapStateToProps, null)(Computer);
