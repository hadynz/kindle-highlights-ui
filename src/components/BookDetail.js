import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBook } from "../actions";

class BookDetail extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    const { book, bookHighlights } = this.props;

    if (!bookHighlights) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{book.title}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  book: state.books[ownProps.match.params.id],
  bookHighlights: undefined
});

export default connect(mapStateToProps, { fetchBook })(BookDetail);
