import { mapKeys } from "lodash";

import { types } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case types.FETCH_BOOKS_SUCCESS:
      return mapKeys(action.payload, "bookId");
    default:
      return state;
  }
};
