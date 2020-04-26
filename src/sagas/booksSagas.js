import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { types } from "../actions";

export function* watchFetchBooks() {
  yield takeEvery(types.FETCH_BOOK, workFetchBook);
  yield takeEvery(types.FETCH_BOOKS, workFetchBooks);
}

export function* workFetchBooks() {
  try {
    const response = yield call(axios.get, "/api/books");

    yield put({
      type: types.FETCH_BOOKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Request failed! Could not fetch books.");
  }
}

export function* workFetchBook({ id }) {
  try {
    const response = yield call(axios.get, `/api/books/${id}`);

    yield put({
      type: types.FETCH_BOOK_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Request failed! Could not fetch book.");
  }
}
