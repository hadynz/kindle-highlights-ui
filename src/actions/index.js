export const types = {
  FETCH_BOOK: "FETCH_BOOK",
  FETCH_BOOK_SUCCESS: "FETCH_BOOK_SUCCESS",
  FETCH_BOOKS: "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS",
};

export const fetchBook = (id) => ({ type: types.FETCH_BOOK, id });

export const fetchBooks = () => ({ type: types.FETCH_BOOKS });
