import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `
      @keyframes randomItem${Date.now()}{
        0% {left: 25px}
        25% {left: 85px}
        50% {left: 25px}
        75% {left: 85px}
        100% {left:0}
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
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            src={this.props.computerPlay.hinhAnh}
            alt={this.props.computerPlay.ma}
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
    /**
     * key: value
     * -key: đại diện cho tên props
     * -value: lấy giá trị từ rootReducer
     */
    computerPlay: state.gameReducer.computerPlay,
  };
};

export default connect(mapStateToProps, null)(Computer);
