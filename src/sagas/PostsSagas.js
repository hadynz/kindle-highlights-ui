import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { types } from "../actions";

export function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS, workFetchPosts);
}

// Worker sagas
// Respond to the actions that are caught by the watcher sagas
export function* workFetchPosts() {
  try {
    const response = yield call(axios.get, '/api/books');

    // Dispatch the action to the reducers
    yield put({
      type: types.FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Act on the error
    console.log("Request failed! Could not fetch posts.");
  }
}
