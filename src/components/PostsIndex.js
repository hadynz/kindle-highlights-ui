import { map as _map } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _map(this.props.posts, (post) => (
      <li key={post.bookId} className="list-group-item">
        <Link to={`/books/${post.bookId}`}>{post.title}</Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
