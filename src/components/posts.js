import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  postsList = () => {
    const posts = this.props.posts.map((post) => {
      return (
        <li key={post.id} className="postItem">
          <NavLink to={`posts/${post.id}`} id="link">
            {this.renderImage(post)}
            <Typography id="postTitle" variant="h4" component="h2">
              {post.title}
            </Typography>
            <Typography id="postTag" variant="subtitle1" component="h2" gutterBottom>
              {post.tags}
            </Typography>
          </NavLink>
        </li>
      );
    });
    return posts;
  }

  renderImage = (post) => {
    if (post.coverUrl !== '') {
      return <img id="image" src={post.coverUrl} alt="cover" />;
    }
    return <div />;
  }

  render() {
    return (
      <ul id="posts">
        {this.postsList()}
      </ul>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
