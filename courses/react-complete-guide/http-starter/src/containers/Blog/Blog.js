import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Post from 'components/Post/Post';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import Spinner from 'components/UI/Spinner/Spinner';
import { BlogStyled, Posts, PostsLoading } from './Blog.style';

const Blog = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts?_page=5';
      const response = await axios.get(url);
      setPosts(response.data);
    })();
  }, []);

  const renderPosts = (posts) => {

    if (posts.length === 0) {
      return (
        <PostsLoading>
          <Spinner />
        </PostsLoading>
      );
    }

    return (
      <Posts>
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title.substring(0, 20) + '...'}
            author={post.userId}
          />
        ))}
      </Posts>
    );
  };

  return (
    <BlogStyled>
      
      {renderPosts(posts)}

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
