import { readAllPosts } from "./posts-persistence";

export function getPosts() {
  return readAllPosts();
}

export function getFeaturedPosts() {
  return getPosts().filter((post) => post.isFeatured);
}
