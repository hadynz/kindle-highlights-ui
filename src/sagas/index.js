import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import { watchFetchBooks } from "./bookSagas";
import { watchFetchBookHighlights } from "./bookHighlightSagas";

// Root sagas
// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield all([watchFetchBooks(), watchFetchBookHighlights()]);
}
