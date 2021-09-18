const initState = {
  playOption: [
    {
      ma: "keo",
      hinhAnh: "./img/keo2.png",
      duocChon: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao2.png",
      duocChon: false,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua2.png",
      duocChon: true,
    },
  ],
  result: "Let's go!",
  win: 0,
  played: 0,
  computerPlay: { ma: "keo", hinhAnh: "./img/keo2.png" },
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLAYER-DECISION": {
      let playOption = [...state.playOption];
      playOption = playOption.map((item) => {
        if (item.ma === action.payload.ma) {
          return { ...item, duocChon: true };
        }
        return { ...item, duocChon: false };
      });

      state.playOption = [...playOption];
      return { ...state };
    }
    case "RANDOM": {
      const randomNo = Math.floor(Math.random() * 3);
      const computerPlay = state.playOption[randomNo];
      state.computerPlay = computerPlay;
      return { ...state };
    }
    case "ENDGAME": {
      state.played += 1;
      let player = state.playOption.find((item) => item.duocChon === true);
      let computer = state.computerPlay;
      switch (player.ma) {
        case "keo": {
          if (computer.ma === "bua"){
            state.result = "You lose!";
          }else if (computer.ma === "bao"){
            state.result = "You win!";
            state.win += 1;
          }else{
            state.result = "Draw game!";
          }
          return { ...state };
        }
        case "bua": {
          if (computer.ma === "bao"){
            state.result = "You lose!";
          }else if (computer.ma === "keo"){
            state.result = "You win!";
            state.win += 1;
          }else{
            state.result = "Draw game!";
          }
          return { ...state };
        }
        case "bao": {
          if (computer.ma === "keo"){
            state.result = "You lose!";
          }else if (computer.ma === "bua"){
            state.result = "You win!";
            state.win += 1;
          }else{
            state.result = "Draw game!";
          }
          return { ...state };
        }
        default: {
          return {...state};
        }
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default gameReducer;
