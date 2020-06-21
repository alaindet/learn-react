import React from 'react';
import axios from 'axios';

import { FullPostStyled, PostBody, EditSection, DismissButton } from './FullPost.style';
import Button from 'components/UI/Button/Button';

class FullPost extends React.Component {

  state = {
    post: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id && prevProps.id !== this.props.id) {
      this.fetchPost(this.props.id);
    }
  }

  onDeleteClick = () => {
    console.log('FullPost.onDeleteClick');
    this.props.onDelete(this.props.id);
  }

  onDeselectClick = () => {
    this.setState({ post: null });
    this.props.onDeselect();
  };

  async fetchPost(id) {
    const url = `http://localhost:4242/posts/${id}`;
    const response = await axios.get(url);
    this.setState({ post: response.data });
  }

  render() {

    if (!this.state.post) {
      return (
        <FullPostStyled>
          <p>Please a select a post from above</p>
        </FullPostStyled>
      );
    }

    return (
      <FullPostStyled>

        <h1>{this.state.post.title}</h1>
        <PostBody>{this.state.post.body}</PostBody>
        
        <EditSection>
          <Button type="button" color="secondary" onClick={this.onDeleteClick}>
            Delete
          </Button>
        </EditSection>

        <DismissButton onClick={this.onDeselectClick}>
          &times;
        </DismissButton>

      </FullPostStyled>
    );
  }
}

export default FullPost;
