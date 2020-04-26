import { combineReducers } from "redux";

import booksReducer from "./booksReducer";
import bookHighlights from "./bookHighlights";

const rootReducer = combineReducers({
  books: booksReducer,
  bookHighlights: bookHighlights,
});

export default rootReducer;
