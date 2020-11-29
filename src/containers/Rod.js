import { connect } from "react-redux";
import Rod from "../components/Rod";
import { displayGame } from "../store/action";

const mapStateToProps = (state) => ({
  rod_array : state.rod_array,
  game_init: state.game_init,
  selected_rods : state.selected_rods,
  number_of_rods: state.number_of_rods

});


const mapDispatchToProps = (dispatch) => ({
  displayGame: (rod_array) => {
    dispatch(displayGame(rod_array));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Rod);