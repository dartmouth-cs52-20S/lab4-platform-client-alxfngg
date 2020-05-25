import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { createPost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', content: '', coverUrl: '', tags: '',
    };
  }

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleChangeTags = (event) => {
    this.setState({ tags: event.target.value });
  }

  handleChangeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  handleChangeCover = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  handleSave = () => {
    this.props.createPost(this.state, this.props.history);
  }

  handleDelete = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="post">
        <input className="titleBox" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        <input className="tagsBox" placeholder="Tags" value={this.state.tags} onChange={this.handleChangeTags} />
        <TextareaAutosize className="contentBox" placeholder="Content (Markdown Supported)" value={this.state.content} onChange={this.handleChangeContent} />
        <input className="coverUrlBox" placeholder="Cover URL" value={this.state.coverUrl} onChange={this.handleChangeCover} />
        <div id="buttons">
          <IconButton aria-label="delete" onClick={this.handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="save" onClick={this.handleSave}>
            <SaveIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(Post);
