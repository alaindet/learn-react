import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Post from 'components/Post/Post';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import { BlogStyled, Posts } from './Blog.style';

const Blog = (props) => {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(url);
      setPosts(response.data);
      setLoading(false);
    })();
  });

  if (loading) {
    return <p>Loading...</p>;
  }

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
