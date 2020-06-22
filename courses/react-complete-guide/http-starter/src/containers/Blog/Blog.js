import React from 'react';
import axios from 'axios';

import AUTHORS from 'data/authors';
import stringUtils from 'services/string-utils';
import arrayUtils from 'services/array-utils';
import PostsList from 'components/PostsList/PostsList';
import FullPost from 'components/FullPost/FullPost';
import NewPost from 'components/NewPost/NewPost';
import { BlogStyled } from './Blog.style';

class Blog extends React.Component {

  LAST_PAGE = 10;

  state = {
    page: 1,
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchPosts(this.state.page);
    }
  }

  async fetchPosts(page) {
    const url = `http://localhost:4242/posts?_page=${page}`;
    const response = await axios.get(url);
    const posts = this.processPosts(response.data);
    this.setState({ posts });
  }

  onPostSelect = (id) => {
    this.setState({ selectedPostId: id });
  };

  onPostDeselect = () => {
    this.setState({ selectedPostId: null });
  };

  onPostDelete = (id) => {
    console.log(`TODO: You are deleting post #${id}`);
  };

  onPrevPage = () => {
    const prev = this.state.page - 1;
    const page = prev < 0 ? 0 : prev;
    this.setState({ page });
  };

  onNextPage = () => {
    const next = this.state.page + 1;
    const page = next > this.LAST_PAGE ? this.LAST_PAGE : next;
    this.setState({ page });
  };

  processPosts(posts) {
    const authorsMap = arrayUtils.getMapFromArrayByKey(AUTHORS, 'id');
    return posts.map(post => {
      return {
        ...post,
        title: stringUtils.capitalize(post.title),
        author: authorsMap[post.authorId].name,
      };
    });
  }

  render() {
    return (
      <BlogStyled>

        <PostsList
          posts={this.state.posts}
          page={this.state.page}
          lastPage={this.LAST_PAGE}
          selectedPostId={this.state.selectedPostId}
          onPostSelect={this.onPostSelect}
          onPrevPage={this.onPrevPage}
          onNextPage={this.onNextPage}
        />

        <FullPost
          id={this.state.selectedPostId}
          onDeselect={this.onPostDeselect}
          onDelete={this.onPostDelete}
        />

        <NewPost />

      </BlogStyled>
    );
  }
}


export default Blog;
