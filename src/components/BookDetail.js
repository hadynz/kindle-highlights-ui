import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import { fetchBook, fetchBookHighlights } from "../actions";

const useStyles = (theme) => ({
  card: {
    marginBottom: 20,
  },
});

class BookDetail extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    this.props.fetchBookHighlights(this.props.match.params.id);
  }

  renderHighlights() {
    const { bookHighlights, classes } = this.props;

    return bookHighlights.map((h) => (
      <Card key={h.bookHighlightId} className={classes.card}>
        <CardContent>{h.text}</CardContent>
      </Card>
    ));
  }

  render() {
    const { book, bookHighlights } = this.props;

    if (!book || !bookHighlights) {
      return <div>Loading...</div>;
    }

    return (
      <Container maxWidth="sm">
        <Link to="/">Back to Index</Link>
        <h3>{book.title}</h3>
        <h4>Highlights</h4>
        {this.renderHighlights()}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  book: state.books[ownProps.match.params.id],
  bookHighlights: state.bookHighlights[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchBookHighlights, fetchBook })(
  withStyles(useStyles)(BookDetail)
);
