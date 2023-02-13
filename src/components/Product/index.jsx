import { connect } from "react-redux";
import { addCart, deleteCart, updateCart } from "../../actions/cartActions";
import Product from "./Product";

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find((x) => x.productId === product.id),
  isLoading: loading.some((x) => x.loadingId === product.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => addCart(data)(dispatch),
  updateCartItem: (data) => updateCart(data)(dispatch),
  deleteCartItem: (data) => deleteCart(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
