import { all, fork } from "redux-saga/effects";
import rootAuthSaga from "./authSaga";
import { rootCartSaga } from "./cartSaga";
import rootProductSaga from "./productSaga";
export default function* rootSaga() {
  yield all([fork(rootAuthSaga), fork(rootProductSaga), fork(rootCartSaga)]);
}
