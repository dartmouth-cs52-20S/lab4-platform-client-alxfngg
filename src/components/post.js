import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import marked from 'marked';
import TextareaAutosize from 'react-textarea-autosize';
import { fetchPost, deletePost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  handleDelete = () => {
    this.props.deletePost(this.props.currentPost.id, this.props.history);
  }

  handleUpdate = () => {
    this.setState({ isEditing: false });
    const fields = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
      coverUrl: this.state.coverUrl,
    };
    this.props.updatePost(this.props.match.params.postID, fields);
  }

  renderTitle = () => {
    if (!this.state.isEditing) {
      return (
        <Typography variant="h2" id="title">
          {this.props.currentPost.title}
        </Typography>
      );
    } else {
      return <input className="titleBox" placeholder="Title" onChange={this.onTitleChange} value={this.state.title} />;
    }
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  renderTags = () => {
    if (!this.state.isEditing) {
      return (
        <Typography variant="caption" id="tags">
          tags: {this.props.currentPost.tags}
        </Typography>
      );
    } else {
      return <input className="tagsBox" placeholder="Tags" onChange={this.onTagsChange} value={this.state.tags} />;
    }
  }

  onTagsChange = (event) => {
    this.setState({ tags: event.target.value });
  }

  renderContent = () => {
    if (!this.state.isEditing) {
      return (
        // eslint-disable-next-line react/no-danger
        <div id="content" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
      );
    } else {
      return <TextareaAutosize className="contentBox" placeholder="Content (Markdown Supported)" onChange={this.onContentChange} value={this.state.content} />;
    }
  }

  onContentChange = (event) => {
    this.setState({ content: event.target.value });
  }

  renderCoverUrl = () => {
    if (!this.state.isEditing) {
      return (
        <Link href={this.props.currentPost.coverUrl}>
          cover URL: {this.props.currentPost.coverUrl}
        </Link>
      );
    } else {
      return <input className="coverUrlBox" placeholder="Cover URL" onChange={this.onCoverUrlChange} value={this.state.coverUrl} />;
    }
  }

  onCoverUrlChange = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  toggleEdit = () => {
    this.setState({
      isEditing: true,
      title: this.props.currentPost.title,
      tags: this.props.currentPost.tags,
      content: this.props.currentPost.content,
      coverUrl: this.props.currentPost.coverUrl,
    });
  }

  renderButton = () => {
    if (this.state.isEditing) {
      return (
        <IconButton aria-label="save" onClick={this.handleUpdate}>
          <SaveIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton aria-label="edit" onClick={this.toggleEdit}>
          <EditIcon />
        </IconButton>
      );
    }
  }

  render() {
    return (
      <div>
        <div id="post">
          {this.renderTitle()}
          {this.renderTags()}
          {this.renderContent()}
          {this.renderCoverUrl()}
          <Typography variant="caption" id="tags">
            Posted by: {this.props.currentPost.authorName}
          </Typography>
          <div id="buttons">
            <IconButton aria-label="delete" onClick={this.handleDelete}>
              <DeleteIcon />
            </IconButton>
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    currentPost: reduxState.posts.current,
  };
}

// enables this.props.currentPost
// and this.props.fetchPost, this.props.deletePost, and this.props.updatePost
export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(withRouter(Post));
