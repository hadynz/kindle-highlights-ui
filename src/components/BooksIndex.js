import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { map as _map } from "lodash";

import { fetchBooks } from "../actions";

const useStyles = (theme) => ({
  link: {
    textDecoration: "none",
  },
});

class BooksIndex extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    const { classes } = this.props;

    return _map(this.props.books, (book) => (
      <Grid item xs={12} sm={4} md={3} lg={2} key={book.bookId}>
        <Link to={`/books/${book.bookId}`} className={classes.link}>
          <img alt="book cover" src={book.imageUrl} />
          <Typography variant="body2" noWrap={true} color="textPrimary">
            {book.title}
          </Typography>
          <Typography variant="caption" noWrap={true} color="textSecondary">
            {book.author}
          </Typography>
        </Link>
      </Grid>
    ));
  }

  render() {
    return (
      <div className={{ flexGrow: 1 }}>
        <Grid container spacing={4} alignItems="flex-end">
          {this.renderBooks()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, { fetchBooks })(
  withStyles(useStyles)(BooksIndex)
);
