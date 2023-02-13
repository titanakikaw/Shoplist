import { connect } from "react-redux";
import { logoutAction } from "../../actions/authActions";
import Header from "./header";

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
