import React from 'react';

import { FullPostStyled, PostBody, EditSection } from './FullPost.style';
import Button from 'components/UI/Button/Button';

const FullPost = (props) => {

  const onDeleteClick = () => {
    console.log('FullPost.onDeleteClick');
  };

  if (!props.post) {
    return (
      <FullPostStyled>
        <p>Please a select a post from above</p>
      </FullPostStyled>
    );
  }

  return (
    <FullPostStyled>
      <h1>{props.post.title}</h1>
      <PostBody>{props.post.body}</PostBody>
      <EditSection>
        <Button type="button" color="secondary" onClick={onDeleteClick}>
          Delete
        </Button>
      </EditSection>
    </FullPostStyled>
  );
};

export default FullPost;
