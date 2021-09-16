import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  findThinking = () => {
    return this.props.playOption.find((item) => {
      return item.duocChon === true;
    });
  };
  render() {
    let thinking = this.findThinking();
    if (!thinking) {
      thinking = {};
      thinking.hinhAnh = this.props.playOption[0].hinhAnh;
      thinking.ma = this.props.playOption[0].ma;
    }
    return (
      <div className="player">
        <div className="bubble">
          <img
            className="thinking"
            style={{ width: 100, height: 100 }}
            src={thinking.hinhAnh}
            alt={thinking.ma}
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
          {this.props.playOption.map((item) => {
            let bgcolor = {};
            if (item.duocChon === true) {
              bgcolor = { backgroundColor: "rgb(7, 85, 49)" };
            }
            return (
              <button
                className="item"
                style={bgcolor}
                key={item.ma}
                onClick={() => {
                  this.props.makeDecision(item);
                }}
              >
                <img
                  style={{ width: 50, height: 50 }}
                  src={item.hinhAnh}
                  alt={item.ma}
                />
              </button>
            );
          })}
        </div>
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
    playOption: state.gameReducer.playOption,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * key: value
     * -key: đại diện cho tên props
     * -value: là 1 phương thức
     */
    makeDecision: (playOption) => {
      //  Tao action
      const action = {
        type: "PLAYER-DECISION",
        payload: playOption ,
      };
      // Gửi action vào store
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
