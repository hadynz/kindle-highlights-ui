import { map as _map } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBooks } from "../actions";

class BooksIndex extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return _map(this.props.books, (book) => (
      <li key={book.bookId} className="list-group-item">
        <Link to={`/books/${book.bookId}`}>{book.title}</Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        <ul className="list-group">{this.renderBooks()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, { fetchBooks })(BooksIndex);
