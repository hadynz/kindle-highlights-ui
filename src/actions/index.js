export const types = {
  FETCH_BOOK: "FETCH_BOOK",
  FETCH_BOOK_SUCCESS: "FETCH_BOOK_SUCCESS",
  FETCH_BOOKS: "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
  FETCH_BOOK_HIGHLIGHTS: "FETCH_BOOK_HIGHLIGHTS",
  FETCH_BOOK_HIGHLIGHTS_SUCCESS: "FETCH_BOOK_HIGHLIGHTS_SUCCESS",
};

export const fetchBook = (id) => ({ type: types.FETCH_BOOK, id });

export const fetchBooks = () => ({ type: types.FETCH_BOOKS });

export const fetchBookHighlights = (id) => ({
  type: types.FETCH_BOOK_HIGHLIGHTS,
  id,
});
