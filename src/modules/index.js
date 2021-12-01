import { combineReducers } from "redux";
import movie, { getDataSaga } from "./Movie";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  movie,
});

export function* rootSaga() {
  yield all([getDataSaga()]);
}

export default rootReducer;
