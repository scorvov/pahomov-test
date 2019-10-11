import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { authSuccess } from "./actions/auth-actions";
import { loadToken } from "../utils/load-token";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const initialApp = loadToken();
store.dispatch(authSuccess(initialApp));

sagaMiddleware.run(rootSaga);
