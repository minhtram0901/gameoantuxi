import React, { Component } from 'react'
import { connect } from "react-redux";

class Result extends Component {
    render() {
        return (
            <div className="result">
                <div className="main-text">{this.props.result}</div>
                 {/*Draw game  */}
                <div className="sub-text mt-3">number of wins: {this.props.win}</div>
                <div className="sub-text">number of games played: {this.props.played}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      /**
       * key: value
       * -key: đại diện cho tên props
       * -value: lấy giá trị từ rootReducer
       */
       result: state.gameReducer.result,
       win: state.gameReducer.win,
       played: state.gameReducer.played,
    };
  };
  
  export default connect(mapStateToProps, null)(Result);