import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBook, fetchBookHighlights } from "../actions";

class BookDetail extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    this.props.fetchBookHighlights(this.props.match.params.id);
  }

  render() {
    const { book, bookHighlights } = this.props;

    if (!book || !bookHighlights) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{book.title}</h3>
        <h4>Highlights</h4>
        {bookHighlights.map((h) => (
          <div key={h.bookHighlightId}>{h.text}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  book: state.books[ownProps.match.params.id],
  bookHighlights: state.bookHighlights[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchBookHighlights, fetchBook })(
  BookDetail
);
