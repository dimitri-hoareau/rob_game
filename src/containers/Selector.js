import { connect } from "react-redux";
import Selector from "../components/Selector";
import { selectNumberOfRod } from "../store/action";

const mapStateToProps = (state) => ({
  selected_rods: state.selected_rods,
});


const mapDispatchToProps = (dispatch) => ({
  selectNumberOfRod: (numberOfRod) => {
    dispatch(selectNumberOfRod(numberOfRod));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selector);