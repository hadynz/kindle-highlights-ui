import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import { watchFetchPosts } from "./PostsSagas";

// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
