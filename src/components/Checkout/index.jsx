import { connect } from "react-redux";
import { deleteCart } from "../../actions/cartActions";
import Checkout from "./checkout";

const mapStateToProps = ({ products, cart }) => ({
  cart,
  products,
});
const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (data) => deleteCart(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
