import { all, fork } from "redux-saga/effects";
import rootAuthSaga from "./authSaga";

export default function* rootSaga() {
  yield all([fork(rootAuthSaga)]);
}
