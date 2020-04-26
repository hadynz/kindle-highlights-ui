import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { fetchBook, fetchBookHighlights } from "../actions";

const useStyles = (theme) => ({
  root: {
    marginBottom: 20,
  },
  details: {
    display: "flex",
  },
  actions: {
    width: 100,
  },
  secondaryTitle: {
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
      <Card key={h.bookHighlightId} className={classes.root}>
        <div className={classes.details}>
          <CardContent>
            <Typography
              className={classes.secondaryTitle}
              color="textSecondary"
              gutterBottom
            >
              {h.locationPercentage}
            </Typography>
            <Typography>{h.text}</Typography>
          </CardContent>
          <div className={classes.actions}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
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
