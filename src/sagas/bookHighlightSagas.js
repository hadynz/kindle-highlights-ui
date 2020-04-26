import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { types } from "../actions";

export function* watchFetchBookHighlights() {
  yield takeEvery(types.FETCH_BOOK_HIGHLIGHTS, workFetchBookHighlights);
}

// Worker sagas
// Respond to the actions that are caught by the watcher sagas
export function* workFetchBookHighlights({ id }) {
  try {
    const response = yield call(axios.get, `/api/books/${id}/highlights`);

    // Dispatch the action to the reducers
    yield put({
      type: types.FETCH_BOOK_HIGHLIGHTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Act on the error
    console.log("Request failed! Could not fetch book highlights.");
  }
}
