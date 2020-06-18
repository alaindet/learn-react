import React from 'react';

import Post from 'components/Post/Post';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import { BlogStyled, Posts } from './Blog.style';

const Blog = (props) => {
  return (
    <BlogStyled>
      
      <Posts>
        <Post />
        <Post />
        <Post />
      </Posts>

      <section>
        <FullPost />
      </section>

      <section>
        <NewPost />
      </section>

    </BlogStyled>
  );
};

export default Blog;
