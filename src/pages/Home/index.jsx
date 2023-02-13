import { connect } from "react-redux";
import { loadCart } from "../../actions/cartActions";
import { loadProducts } from "../../actions/productsActions";
import Home from "./home";

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => loadProducts()(dispatch),
  loadCart: () => loadCart()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
