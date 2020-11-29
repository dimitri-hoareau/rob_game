import { INCREMENT, SELECT_NUMBER_OF_ROD, DISPLAY_GAME } from "../action";

const initialState = {
  count: 1,
  selected_rods : 0,
  rod_array : [],
  game_init: false,
  number_of_rods : 30,
  computer_turn: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SELECT_NUMBER_OF_ROD:
      return {
        ...state,
        selected_rods: action.payload,
        number_of_rods : state.number_of_rods - action.payload,
        computer_turn: true
      };
    case DISPLAY_GAME:
      return {
        ...state,
        rod_array: action.payload,
        game_init: true
      };
    default:
      return state;
  }
};