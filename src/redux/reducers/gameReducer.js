import { act } from "react-dom/test-utils";

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
  result: "★You win★",
  wins: 0,
  played: 0,
  computerPlay: { ma: "keo", hinhAnh: "./img/keo2.png" },
};

const gameReducer = (state = initState, action) =>{
    switch (action.type){
        case "PLAYER-DECISION": {
            let playOption = [...state.playOption];
            playOption = playOption.map((item)=>{
                if(item.ma === action.payload.ma){
                    return {...item, duocChon : true}
                }
                return {...item, duocChon : false}
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
        default:{
            return {...state};
        }
    }
}

export default gameReducer;