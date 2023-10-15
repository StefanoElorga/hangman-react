const initialState = {
  names: {
    playerOneName: { name: "Player One", points: 0 },
    playerTwoName: { name: "Player Two", points: 0 },
  },
  word: "",
  turn: 2,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_NAMES":
      return { ...state, names: action.payload };

    case "WRITE_WORD":
      return { ...state, word: action.payload };

    case "CHANGE_TURN":
      return { ...state, turn: action.payload };

    case "SUM_POINT":
      if (action.payload === 2) {
        return {
          ...state,
          names: {
            ...state.names,
            playerTwoName: {
              ...state.names.playerTwoName,
              points: state.names.playerTwoName.points + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          names: {
            ...state.names,
            playerOneName: {
              ...state.names.playerOneName,
              points: state.names.playerOneName.points + 1,
            },
          },
        };
      }

    default:
      return state;
  }
};

export default rootReducer;
