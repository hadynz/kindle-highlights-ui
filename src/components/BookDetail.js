import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { fetchBook, fetchBookHighlights } from "../actions";

const useStyles = (theme) => ({
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
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
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {h.locationPercentage}
          </Typography>
          <Typography>{h.text}</Typography>
        </CardContent>
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
        <Typography variant="h5" gutterBottom>
          {book.title}
        </Typography>
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
