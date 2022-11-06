import { BlogPost, FullBlogPost } from "./common/types";

export const MOCK_POSTS: BlogPost[] = [
  {
    title: "My first post",
    image: "first.jpg",
    excerpt: "My first post - Lorem ipsum",
    date: Date.now(),
    slug: "my-first-post",
    isFeatured: false,
  },
  {
    title: "My second post",
    image: "second.jpg",
    excerpt: "My second post - Lorem ipsum",
    date: Date.now(),
    slug: "my-second-post",
    isFeatured: false,
  },
  {
    title: "My third post",
    image: "third.jpg",
    excerpt: "My third post - Lorem ipsum",
    date: Date.now(),
    slug: "my-third-post",
    isFeatured: false,
  },
  {
    title: "My fourth post",
    image: "fourth.jpg",
    excerpt: "My fourth post - Lorem ipsum",
    date: Date.now(),
    slug: "my-fourth-post",
    isFeatured: false,
  },
];

export const MOCK_POST: FullBlogPost = {
  ...MOCK_POSTS[0],
  content: `
  Fugiat ex **voluptate** sit voluptate *eiusmod non*. Consequat _velit dolore elit incididunt incididunt quis_. Laboris anim non culpa in voluptate anim excepteur irure sit occaecat voluptate dolore magna labore.

  1. This
  2. Is a neat
  3. But completely
  4. Useless
  5. List

  Laborum id nostrud ipsum adipisicing Lorem laborum consequat. Minim in magna adipisicing sunt qui enim aute anim laboris elit sit. Voluptate excepteur est tempor Lorem culpa eu id. Minim veniam elit minim consectetur proident magna ad adipisicing cillum proident cupidatat consectetur nostrud. Est ex sit ea eu est. Laborum tempor in laborum et esse quis sint. Ex Lorem duis anim sunt elit ex commodo consectetur veniam laboris ullamco incididunt nulla.

  Here is a [link](https://www.google.com)
`,
};
