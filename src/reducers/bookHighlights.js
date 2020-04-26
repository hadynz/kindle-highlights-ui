import { types } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_HIGHLIGHTS_SUCCESS:
      const { bookId, highlights } = action.payload;
      return { ...state, [bookId]: highlights };
    default:
      return state;
  }
};
