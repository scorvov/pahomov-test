import { call, put, takeLatest } from "redux-saga/effects";
import { AUTH_FETCH_REQUESTED, AUTH_FETCH_FAILED } from "./constants";
import { authSuccess } from "./actions/auth-actions";
import { Api } from "../services/api";

const api = new Api();

function* fetchAuth(action: any) {
  try {
    const token = yield call(api.authCheck, action.payload);
    localStorage.setItem("jwt", token.jwt);
    yield put(authSuccess({ isAuth: true }));
  } catch (e) {
    yield put({ type: AUTH_FETCH_FAILED, message: e });
  }
}
export default function* rootSaga() {
  yield takeLatest(AUTH_FETCH_REQUESTED, fetchAuth);
}
