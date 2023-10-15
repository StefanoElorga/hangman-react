export const chooseNames = (updatedNames) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "CHOOSE_NAMES",
        payload: updatedNames,
      });
    } catch (error) {
      console.log("error en la action: chooseNames()", error);
    }
  };
};

export const writeWord = (word) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "WRITE_WORD",
        payload: word,
      });
    } catch (error) {
      console.log("error en la action: writeWord()", error);
    }
  };
};

export const sumPoint = (turn) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "SUM_POINT",
        payload: turn,
      });
    } catch (error) {
      console.log("error en la action: sumPoint()", error);
    }
  };
};

export const changeTurn = (turn) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "CHANGE_TURN",
        payload: turn,
      });
    } catch (error) {
      console.log("error en la action: changeTurn()", error);
    }
  };
};
