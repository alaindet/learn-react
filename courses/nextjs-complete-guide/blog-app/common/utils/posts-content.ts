import { FullBlogPost } from '../types';
import { readAllPosts, readPost } from './posts-persistence';

export function getPosts(): FullBlogPost[] {
  return readAllPosts();
}

export function getFeaturedPosts(): FullBlogPost[] {
  return getPosts().filter((post) => post.isFeatured);
}

export function getPost(slug: string): FullBlogPost | null {
  return readPost(`${slug}.md`);
}
