import { mapKeys } from "lodash";

import { types } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case types.FETCH_POSTS_SUCCESS:
      return mapKeys(action.payload, "bookId");
    case types.CREATE_POST_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_POST_SUCCESS:
      var newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};
