import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AUTHORS from 'data/authors';
import strings from 'services/string-utils';
import PostsList from 'components/PostsList/PostsList';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import { BlogStyled } from './Blog.style';

const Blog = (props) => {

  const LAST_PAGE = 10;
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const onPostSelect = (id) => {
    const post = posts.find(post => post.id === id);
    setSelectedPost(post);
  };

  const onPostDeselect = () => {
    setSelectedPost(null);
  };

  const onPrevPage = () => {
    const prev = page - 1;
    setPage(prev < 0 ? 0 : prev);
  };

  const onNextPage = () => {
    const next = page + 1;
    setPage(next > LAST_PAGE ? LAST_PAGE : next);
  };

  const getMapFromCollectionByKey = (collection, key) => {
    const map = {};
    for (const item of collection) {
      map[item[key]] = item;
    }
    return map;
  };

  const processPosts = (posts) => {
    const authorsMap = getMapFromCollectionByKey(AUTHORS, 'id');
    return posts.map(post => {
      return {
        ...post,
        title: strings.capitalize(post.title),
        author: authorsMap[post.authorId].name,
      };
    });
  };

  useEffect(() => {
    (async () => {
      const url = `http://localhost:4242/posts?_page=${page}`;
      const response = await axios.get(url);
      const posts = processPosts(response.data);
      setPosts(posts);
    })();
  }, [page]);

  return (
    <BlogStyled>
      <PostsList
        posts={posts}
        onPostSelect={onPostSelect}
        page={page}
        lastPage={LAST_PAGE}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
      <FullPost post={selectedPost} onPostDeselect={onPostDeselect}/>
      <NewPost />
    </BlogStyled>
  );
};

export default Blog;
