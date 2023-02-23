import { connect } from "react-redux";
import { deleteCart } from "../../actions/cartActions";
import Checkout from "./checkout";

const mapStateToProps = ({ products, cart }) => ({
  cart,
  products,
});
const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (payload) =>
    dispatch({
      type: "DELETE_CART_REQUEST",
      payload,
      meta: { loadingId: payload.loadingId },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
