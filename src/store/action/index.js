export const INCREMENT = "INCREMENT";
export const SELECT_NUMBER_OF_ROD = "SELECT_NUMBER_OF_ROD"
export const DISPLAY_GAME = "DISPLAY_GAME"

export const increment = () => ({
  type: INCREMENT,
});

export const displayGame = (payload) => ({
  type: DISPLAY_GAME,
  payload,
});

export const selectNumberOfRod = (payload) => ({
  type: SELECT_NUMBER_OF_ROD,
  payload,
});