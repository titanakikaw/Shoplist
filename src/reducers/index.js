import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { errorReducer } from "./errorReducer";
import { loadingReducer } from "./loadingReducer";
import { localeReducer } from "./localeReducer";
import { ProductReducer } from "./productReducer";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  user: userReducer,
  loading: loadingReducer,
  errors: errorReducer,
  products: ProductReducer,
  cart: cartReducer,
});
