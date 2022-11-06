import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { FullBlogPost } from "../types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function readAllPosts(): FullBlogPost[] {
  const postFiles = fs.readdirSync(POSTS_DIR);
  const posts = postFiles.map((file) => readPost(file));
  posts.sort((a, b) => (a.date > b.date ? -1 : 1)); // Latest first
  return posts;
}

export function readPost(fileName: string): FullBlogPost {
  const fullPath = path.join(POSTS_DIR, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  // TODO: Validate metadata
  const slug = fileName.replace(/\.md$/, "");
  return { ...data, slug, content } as FullBlogPost;
}
