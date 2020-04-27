import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { fetchBook, fetchBookHighlights } from "../../actions";

const useStyles = (theme) => ({
  card: {
    marginBottom: 20,
  },
  cardDetails: {
    display: "flex",
  },
  cardContent: {
    flexGrow: 1,
  },
  bookContainer: {
    width: 140,
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

  handleDelete() {}

  renderHighlights() {
    const { bookHighlights, classes } = this.props;

    return bookHighlights.map((h) => (
      <Card key={h.bookHighlightId} className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.secondaryTitle}
              color="textSecondary"
              gutterBottom
            >
              {h.locationPercentage}
            </Typography>
            <Typography>{h.text}</Typography>
          </CardContent>
          <div>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <CardActions>
          <Chip size="small" label="Basic" onDelete={this.handleDelete} />
        </CardActions>
      </Card>
    ));
  }

  renderBook() {
    const { book } = this.props;
    return (
      <React.Fragment>
        <img src={book.imageUrl} alt={book.title} />
        <Typography variant="body1" noWrap={true} color="textPrimary">
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          noWrap={true}
          color="textSecondary"
          gutterBottom
        >
          {book.author}
        </Typography>
      </React.Fragment>
    );
  }

  render() {
    const { book, bookHighlights } = this.props;

    if (!book || !bookHighlights) {
      return <div>Loading...</div>;
    }

    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            {this.renderBook()}
          </Grid>
          <Grid item xs={12} sm={9}>
            {this.renderHighlights()}
          </Grid>
        </Grid>
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
