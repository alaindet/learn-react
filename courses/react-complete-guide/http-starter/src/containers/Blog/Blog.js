import React, { useEffect, useState } from 'react';
import axios from 'axios';

import strings from 'services/string-utils';
import PostsList from 'components/PostsList/PostsList';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import { BlogStyled } from './Blog.style';

const Blog = (props) => {

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const onPostSelect = (id) => {
    const post = posts.find(post => post.id === id);
    setSelectedPost(post);
  };

  const processPosts = (posts) => {
    const result = [];
    for (const post of posts) {
      result.push({
        ...post,
        title: strings.capitalize(post.title),
      });
    }
    return result;
  };

  useEffect(() => {
    (async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts?_page=5';
      const response = await axios.get(url);
      const posts = processPosts(response.data);
      setPosts(posts);
    })();
  }, []);

  return (
    <BlogStyled>
      <PostsList posts={posts} onPostSelect={onPostSelect} />
      <FullPost post={selectedPost} />
      <NewPost />
    </BlogStyled>
  );
};

export default Blog;
