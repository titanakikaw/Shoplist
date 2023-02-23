import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import reducers from "./reducers";
import rootSaga from "./sagas/rootSagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const middlewares = [sagaMiddleware, errorMiddleware];
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
export default configStore;
