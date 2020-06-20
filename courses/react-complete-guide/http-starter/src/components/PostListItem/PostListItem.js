import React from 'react';

import { PostListItemStyled, PostMeta, Author } from './PostListItem.style';

const Post = (props) => {
  return (
    <PostListItemStyled onClick={() => props.onClick(props.id)}>
      <h1>{props.title}</h1>
      <PostMeta>
        <Author>{props.author}</Author>
      </PostMeta>
    </PostListItemStyled>
  );
};

export default Post;
