import React from 'react';

import { PostStyled, PostMeta, Author } from './Post.style';

const Post = (props) => {
  return (
    <PostStyled>
      <h1>{props.title}</h1>
      <PostMeta>
        <Author>{props.author}</Author>
      </PostMeta>
    </PostStyled>
  );
};

export default Post;
