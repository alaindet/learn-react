import React from 'react';

import { PostStyled, PostMeta, Author } from './Post.style';

const Post = (props) => {
  return (
    <PostStyled>
      <h1>Title</h1>
      <PostMeta>
        <Author>Author</Author>
      </PostMeta>
    </PostStyled>
  );
};

export default Post;
